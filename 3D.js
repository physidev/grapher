var functions = [math.parse("z*x^2")];
var zWidth = 2;
var xWidth = 2;
var scene;
var resolution = 8;

function init() {

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("content").replaceChild(renderer.domElement, document.getElementById("canvas"));

    camera.position.z = 5;

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.update();

    updateText();
    updateScene();

    var animate = function () {
        requestAnimationFrame(animate);

        controls.update();
        renderer.render(scene, camera);
    };
    animate();
    scene.dispose();
}

function updateScene() {
    var f = functions[0];

    var geometry = new THREE.Geometry();
    for(let z=-zWidth; z<=zWidth; z += 1/resolution) {
        for(let x=-xWidth; x<=xWidth; x += 1/resolution) {
            geometry.vertices.push(new THREE.Vector3(x, f.eval({x: x, z: z}), z));
        }
    }
    
    for(let i=0; i<geometry.vertices.length - 1; i++) {
        if(i + 2*xWidth * resolution + 1< geometry.vertices.length && (i+1) % (2 * xWidth*resolution + 1) != 0) {
            geometry.faces.push(new THREE.Face3(i, i+1, i + 2*xWidth * resolution + 1));
            geometry.faces.push(new THREE.Face3(i+1, i+2*xWidth*resolution+1, i+2*xWidth*resolution+2))
        }
    }


    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xEEEEEE);

    var gridHelper = new THREE.GridHelper(4, 4);
    scene.add(gridHelper);

    var axesHelper = new THREE.AxesHelper(2);
    scene.add(axesHelper);

    var light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    var material = new THREE.MeshNormalMaterial();
    material.flatShading = true;
    material.side = THREE.DoubleSide;
    const func = new THREE.Mesh(geometry, material);

    var points = new THREE.Points(geometry, new THREE.PointsMaterial({color: 0x0, size: 5, sizeAttenuation: false}))
    scene.add(func);
    //scene.add(points);
    console.log("Updated Scene");
    console.log(geometry.faces);
}

function updateText() {
	//render function text
	var fields = document.getElementsByClassName("field");
	var displays = document.getElementsByClassName('fieldDisplay');
	functions = [];
	for(let i=0; i<displays.length; i++) {
		
		var node = math.parse(fields[i].value);
		var latex = node.toTex();
		latex = latex.replace('~', '');
		
		katex.render(latex, displays[i], {
			throwOnError: false
		});
		
		console.log(latex);
		
		functions.push(node);
		
	}
}

function updateRes() {
	resolution = document.getElementById("resolution").value;
}

function addFunction() {
	
	document.getElementById("functions").insertAdjacentHTML("beforeend","<div class=\"function-pair\">" +
					"<textarea oninput=\"updateText();\" class=\"field\">y*x^2</textarea>" +
					"<div class=\"fieldDisplay\"></div>" +
				"</div>" 
	);
				
	return false;
}