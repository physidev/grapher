const { vec2, vec3, mat3, mat4 } = glMatrix;

let viewSize = {
    height: 4.8,
    width: 6.4
}
let origin = {
    x: 2.4, y: 3.2
};
const zoomIntensity = 0.05;
let gl, program, locations, buffers;

function generateShaderFunction(ast) {
    return `vec2 f(vec2 z) {\n    return ${a2g(ast)};\n}`;
}

function a2g(n) {
    switch (n.op) {
        case '+': return `${a2g(n.children[0])} + ${a2g(n.children[1])}`;
        case '-': return `${a2g(n.children[0])} - ${a2g(n.children[1])}`;
        case '*': return `cmul(${a2g(n.children[0])}, ${a2g(n.children[1])})`;
        case '/': return `cdiv(${a2g(n.children[0])}, ${a2g(n.children[1])})`;
        case '^': return `cpow(${a2g(n.children[0])}, ${a2g(n.children[1])})`;
        case 'u+': return a2g(n.children[0]);
        case 'u-': return `-(${a2g(n.children[0])})`;
        case 'sin': return `csin(${a2g(n.children[0])})`;
        case 'cos': return `ccos(${a2g(n.children[0])})`;
        case 'tan': return `ctan(${a2g(n.children[0])})`;
        case 'log': return `clog(${a2g(n.children[0])})`;
        case 'exp': return `cexp(${a2g(n.children[0])})`;
        case '\\pi': return 'PI';
        case 'i': return 'I';
        default:
            return n.op;
    }
}

function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success)
        return shader;

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success)
        return program;

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function initProgram(gl, cFunction) {
    const vsSource = `
        attribute vec4 a_position;

        void main() {
            gl_Position = a_position;
        }
    `;
    const fsSource = `
        #define PI 3.1415926538
        #define I vec2(0.0, 1.0)

        precision highp float;
        
        uniform vec2 u_resolution;
        uniform vec2 u_viewSize;
        uniform vec2 u_offset;

        
        //  Function from Iñigo Quiles
        //  https://www.shadertoy.com/view/MsS3Wc
        vec3 hsb2rgb(in vec3 c) {
            vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                                    6.0)-3.0)-1.0,
                            0.0,
                            1.0 );
            rgb = rgb*rgb*(3.0-2.0*rgb);
            return c.z * mix( vec3(1.0), rgb, c.y);
        }

        vec3 oklab2rgb(in vec3 c) {
            float l_ = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
            float m_ = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
            float s_ = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;

            float l = l_*l_*l_;
            float m = m_*m_*m_;
            float s = s_*s_*s_;

            return vec3(
                +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
                -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
                -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
            );
        }

        // COMPLEX MATH
        // helper functions
        float sinh(float x) {
            return 0.5*(exp(x) - exp(-x));
        }
        float cosh(float x) {
            return 0.5*(exp(x) + exp(-x));
        }

        vec2 cmul(vec2 a, vec2 b) {
            return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
        }
        vec2 cdiv(vec2 a, vec2 b) {
            return vec2(
                (a.x*b.x + a.y*b.y) / dot(b, b),
                (a.y*b.x - a.x*b.y) / dot(b, b)
            );
        }   
        vec2 cexp(vec2 z) {
            return exp(z.x) * vec2(cos(z.y), sin(z.y));
        }
        vec2 csin(vec2 z) {
            return vec2(sin(z.x)*cosh(z.y), cos(z.x)*sinh(z.y));
        }
        vec2 ccos(vec2 z) {
            return vec2(cos(z.x)*cosh(z.y), -sin(z.x)*sinh(z.y));
        }
        vec2 ctan(vec2 z) {
            return cdiv(csin(z), ccos(z));
        }
        // principal branch
        vec2 clog(vec2 z) {
            return vec2(log(length(z)), atan(z.y, z.x));
        }
        vec2 cpow(vec2 a, vec2 b) {
            return cexp(cmul(b, clog(a)));
        }

        ${cFunction}

        void main() {
            vec2 coords = f((gl_FragCoord.xy/u_resolution)*u_viewSize + u_offset);

            float angle = atan(coords.y, coords.x);
            float radius = length(coords);
            float C = 1.0 / (radius + 1.0);

            vec3 color = oklab2rgb(vec3( radius/(radius + 1.0), 0.25 * cos(angle), 0.25 * sin(angle) ));

            // vec3 color = hsb2rgb(vec3( 0.5*angle/PI + 0.5, radius, 1.0));

            // grid lines
            // vec3 color = vec3(C * pow(cos(2.0 * PI * coords.x), 10.0), C * pow(cos(2.0 * PI * coords.y), 10.0), 0);

            gl_FragColor = vec4(color, 1);
        }
    `;

    // compile shaders and link into shader program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    program = createProgram(gl, vertexShader, fragmentShader);

    const locations = {
        uniform: {
            resolution: gl.getUniformLocation(program, 'u_resolution'),
            viewSize: gl.getUniformLocation(program, 'u_viewSize'),
            offset: gl.getUniformLocation(program, 'u_offset'),
        },
        attribute: {
            position: gl.getAttribLocation(program, "a_position")
        }
    }

    const buffers = {
        position: gl.createBuffer()
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    const positions = [-1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return { program, locations, buffers };
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function render(gl, program, locations, buffers) {
    // update clip space if canvas resized
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    gl.enableVertexAttribArray(locations.attribute.position);

    // bind position attribute
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    const size = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.vertexAttribPointer(locations.attribute.position, size, type, normalize, stride, offset);

    // bind uniforms
    gl.uniform2f(locations.uniform.resolution, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(locations.uniform.viewSize, viewSize.width, viewSize.height);
    gl.uniform2f(locations.uniform.offset, -origin.x, -origin.y);

    const primitiveType = gl.TRIANGLES;
    const count = 6;
    gl.drawArrays(primitiveType, 0, count);
}

function main() {
    // INITIALIZATION
    // obtain canvas webgl context
    const canvas = document.querySelector('#glcanvas');
    gl = canvas.getContext('webgl');
    if (!gl) {
        console.error('No webgl!');
        return;
    }

    const inputSpan = document.getElementById('mathinput');
    var inputMathField = MQ.MathField(inputSpan, {
        handlers: {
            enter: () => {
                const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
                document.getElementById('latex').innerText = enteredMath;

                const ast = MathParser.parse(enteredMath);
                document.getElementById('ast').innerText = JSON.stringify(ast, null, '  ');

                const s = generateShaderFunction(ast);
                document.getElementById('shader').innerText = s;

                ({ program, locations, buffers } = initProgram(gl, s));
            }
        }
    });

    // motion controls
    const hammer = new Hammer(canvas);
    let dragging = false, dragStart;
    hammer.on('panstart', event => {
        dragStart = {
            x: event.center.x - canvas.offsetLeft,
            y: event.center.y - canvas.offsetTop
        }
        dragging = true;
    });
    hammer.on('panend', event => {
        dragging = false;
    });
    hammer.on('pancancel', event => {
        dragging = false;
    });
    hammer.on('panmove', event => {
        if (!dragging)
            return

        dragEnd = {
            x: event.center.x - canvas.offsetLeft,
            y: event.center.y - canvas.offsetTop
        }

        origin.x -= - (dragEnd.x - dragStart.x) / gl.canvas.width * viewSize.width;
        origin.y -= (dragEnd.y - dragStart.y) / gl.canvas.height * viewSize.height;

        dragStart = dragEnd;
    });
    canvas.addEventListener('wheel', event => {
        event.preventDefault();

        const wheel = event.deltaY < 0 ? 1 : -1;
        const zoom = Math.exp(wheel * zoomIntensity);
        if (viewSize.width * zoom < 1e-6 || viewSize.width * zoom > 1e6)
            return;


        const rect = canvas.getBoundingClientRect();
        const mouseU = (event.clientX - rect.left) / canvas.width;
        const mouseV = (rect.bottom - event.clientY) / canvas.height;

        viewSize.width /= zoom;
        viewSize.height /= zoom;

        // origin += mouseNew - mouseOld
        origin.x += (mouseU - mouseU * zoom) * viewSize.width;
        origin.y += (mouseV - mouseV * zoom) * viewSize.height;

        // document.getElementById('canvas-debug').innerText = `x: ${mouseNewX}\ny: ${mouseNewY}`;
    });

    
    const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
    document.getElementById('latex').innerText = enteredMath;

    const ast = MathParser.parse(enteredMath);
    document.getElementById('ast').innerText = JSON.stringify(ast, null, '  ');

    const s = generateShaderFunction(ast);
    document.getElementById('shader').innerText = s;

    ({ program, locations, buffers } = initProgram(gl, s));

    (function animloop() {
        requestAnimFrame(animloop);
        render(gl, program, locations, buffers);
    })();
}

main();


