let origin = {
    x: 6.4, y: 4.8
};
let viewSize = { width: 12.8, height: 9.6 };
let gridSpacing = {major: 2, minor: 0.5};
let grid = false;
const zoomIntensity = 0.05;
let enableOldColor = false;

let gl, program, locations, buffers;

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
    gl.getExtension("OES_standard_derivatives");

	const fsSource = generateFragmentShader({
		cFunction, enableOldColor
	});

    // compile shaders and link into shader program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    program = createProgram(gl, vertexShader, fragmentShader);

    const locations = {
        uniform: {
            resolution: gl.getUniformLocation(program, 'u_resolution'),
            viewSize: gl.getUniformLocation(program, 'u_viewSize'),
            offset: gl.getUniformLocation(program, 'u_offset'),
            gridSpacing: gl.getUniformLocation(program, 'u_gridSpacing')
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
    gl.uniform2f(locations.uniform.gridSpacing, gridSpacing.major, gridSpacing.minor);

    const primitiveType = gl.TRIANGLES;
    const count = 6;
    gl.drawArrays(primitiveType, 0, count);
}

function calculateGridSpacing(x) {
    // largest power of 10 smaller than the screenWidth x
    s = Math.pow(10, Math.floor(Math.log10(x)));
    t = s/100;

    if(x > 6.5 * s)
        return {major: 100 * t, minor: 20 * t}
    if(x > 2.5 * s)
        return {major: 50 * t, minor: 10 * t}
    if(x > 1.3 * s)
        return {major: 20 * t, minor: 5 * t}
    return {major: 10 * t, minor: 2 * t}
} 

function main() {
    // INITIALIZATION
    // obtain canvas webgl context
    const canvas = document.querySelector('#glcanvas');
    const gridCanvas = document.querySelector('#gridcanvas');

    gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error('No webgl!');
        return;
    }

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    gridCanvas.width = rect.width;
    gridCanvas.height = rect.height;

    viewSize = { height: 10, width: rect.width / rect.height * 10 };
    origin = { y: 5, x: rect.width / rect.height * 5 };

    // math input
    const inputSpan = document.getElementById('mathinput');
    var inputMathField = MQ.MathField(inputSpan, {
        handlers: {
            enter: () => {
                const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
				if(demo)
					document.getElementById('latex').innerText = enteredMath;
                const func = MathParser.parse(enteredMath);
				if(demo)
                    document.getElementById('shader').innerText = func;

                ({ program, locations, buffers } = initProgram(gl, func));
            }
        }
    });

    // settings
    const colorCheck = document.getElementById('colorcheck');
    colorCheck.addEventListener('change', (e) => {
        enableOldColor = colorCheck.checked;
        
        const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
        const func = MathParser.parse(enteredMath);

        ({ program, locations, buffers } = initProgram(gl, func));
    })

    // motion controls
    const hammer = new Hammer(gridCanvas);
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
    gridCanvas.addEventListener('wheel', event => {
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

        gridSpacing = calculateGridSpacing(viewSize.width);
    });


    // initialize function
    const enteredMath = inputMathField.latex().replaceAll('\\left', '').replaceAll('\\right', '');
	if(demo)
        document.getElementById('latex').innerText = enteredMath;

    const func = MathParser.parse(enteredMath);
	if(demo)
        document.getElementById('shader').innerText = func;

    ({ program, locations, buffers } = initProgram(gl, func));

    (function animloop() {
        requestAnimFrame(animloop);
        render(gl, program, locations, buffers);
    })();
}

main();