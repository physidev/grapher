
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame    ||
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

var scale, transX, transY, res, zoomIntensity;
var a;
var canvas, c;
var start = null;
var colors = ["rgb(0, 125, 125)", "rgb(125, 125, 0)", "rgb(125, 0, 125)"];
var func = math.parse("z");
var color, input = {h: 0, s: 1, l: 0, z: 0};
var out;
var scaleExponent, grade;

function init() {
	res = 30;
	scale = 50.0;
	transX = 2.0;
	transY = 2.0;
	zoomIntensity = 0.1;
	a = 0.85;
	
	var drag = false;
	var dragStart;
	var dragEnd;

	canvas = document.getElementById('graph');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	c = canvas.getContext('2d');
	c.font = "15px Arial";
	
	canvas.addEventListener('mousedown', event => {
		dragStart = {
			x: event.pageX - canvas.offsetLeft,
			y: event.pageY - canvas.offsetTop
		}
		
		drag = true;
	});
	
	canvas.addEventListener('mouseup', event => {
		drag = false;
	});
	
	canvas.addEventListener('mouseleave', event => {
		drag = false;
	});
	
	canvas.addEventListener('mousemove', event => {
		if(drag) {
			dragEnd = {
				x: event.pageX - canvas.offsetLeft,
				y: event.pageY - canvas.offsetTop
			}
			transX -= -(dragEnd.x - dragStart.x) / scale;
			transY -= (dragEnd.y - dragStart.y) / scale;
			
			dragStart = dragEnd;
			
		}
	});
	
	canvas.addEventListener("wheel", event => {
	
		var mouseX = event.clientX - canvas.offsetLeft;
		var mouseY = -event.clientY + canvas.offsetTop+canvas.offsetHeight;
	
		var wheel = event.deltaY < 0 ? 1 : -1;
		
		var zoom = Math.exp(wheel*zoomIntensity);
		
		if(0.000001 < scale*zoom && scale*zoom < 1000000) {
			
			c.scale(zoom, zoom);
			
			transX += mouseX / (scale * zoom) - mouseX / scale;
			transY += mouseY / (scale * zoom) - mouseY / scale;

			scale *= zoom;
		}
	});
	
	document.getElementById('canvas').onwheel = function() { return false; }
	
	updateText();
}

function render() {

	c.setTransform(1, 0, 0, 1, 0, 0);
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.scale(scale, scale);
	c.translate(transX, -transY);
	
	c.lineWidth = 4/scale;
	//draw each segment
	let pieces = 0;
	let mathTime = 0;
	let renderTime = 0;
	for(let x=-transX; x < canvas.width/scale - transX; x+=res/scale) {
		for(let y=-transY + res/scale; y < canvas.height/scale - transY + res/scale; y+=res/scale) {

			mathTime -= window.performance.now();
			input.z = math.complex(x, y);
			out = func.eval(input);
			input.h = 180 + 180/Math.PI * Math.atan2(out.im, out.re);
			input.l = 1 - Math.pow(a, Math.hypot(out.re, out.im));
			mathTime += window.performance.now(); 

			renderTime -= window.performance.now();
			color = tinycolor(input);
			c.fillStyle = color.toRgbString();
			c.fillRect(x, canvas.height/scale -y, res/scale, res/scale);
			renderTime += window.performance.now();
			pieces++;
		}
	}
	console.log(pieces + " pieces, math: " + 1000*mathTime/pieces + "us/piece, render: " + 1000*renderTime/pieces + "us/pieces");
	
	//draw gridlines
	c.strokeStyle = 'rgb(150,150,150)';
	c.lineWidth = 1/scale;
	
	scaleExponent = Number.parseFloat(scale.toExponential(1).substring(4))-1;
	grade = Math.pow(10, -scaleExponent);
	
	
	document.getElementById('stats').innerHTML = 'scale: ' + scale + '<br>transX: ' + transX + '<br>transY: ' + transY + '<br>scaleExponent: ' + scaleExponent + '<br>grade: ' + grade;
	
	//vertical gridlines
	document.getElementById('stats').innerHTML += '<br>: ' + grade*Math.floor(-transX/grade);
	for(let x=grade*Math.floor(-transX/grade); x < canvas.width/scale - transX; x+=grade) {
	
		if(x % (5*grade) == 0) {
			c.scale(1/scale, 1/scale);
			c.fillText(truncateToDecimals(x, scaleExponent > 1 ? scaleExponent : 1), scale*x, canvas.height - 2);
			c.scale(scale, scale);
		}
		
		c.beginPath();
		c.moveTo(x, transY);
		c.lineTo(x, canvas.height/scale + transY);
		c.closePath();
		c.stroke();
	}
	
	//horizontal gridlines
	for(let y = grade*Math.floor(-transY/grade); y < canvas.height/scale - transY; y+=grade) {
	
		if(y % (5*grade) == 0) {
			c.scale(1/scale, 1/scale);
			c.fillText(Math.trunc(y), 7, canvas.height - scale*y + 7, 100);
			c.scale(scale, scale);
		}
	
		c.beginPath();
		c.moveTo(-transX, canvas.height/scale - y);
		c.lineTo(canvas.width/scale - transX, canvas.height/scale - y);
		c.closePath();
		c.stroke();
	}
	
	//mark vertical origin line
	c.strokeStyle = 'rgb(0,0,0)';
	c.beginPath();
	c.moveTo(0, transY);
	c.lineTo(0, canvas.height/scale + transY);
	c.stroke();
	
	//mark horizontal origin line
	c.beginPath();
	c.moveTo(-transX, canvas.height/scale);
	c.lineTo(canvas.width/scale - transX, canvas.height/scale);
	c.closePath();
	c.stroke();
	
}

function updateRes() {
	res = document.getElementById("resolution").value;
}

function updateText() {
	//render function text
	var field = document.getElementsByClassName("field")[0];
	var display = document.getElementsByClassName('fieldDisplay')[0];
	
	var node = math.parse(field.value);
	var latex = node.toTex();
	
	katex.render(latex, display, {
		throwOnError: false
	});
	
	func = node.compile();
}

function truncateToDecimals(num, dec = 2) {
	const calcDec = Math.pow(10, dec);
	return Math.trunc(num * calcDec) / calcDec;
}

function toggleOptions() {
	var element = document.getElementById("settings");
	if(element.classList.contains("hidden"))
		element.classList = [];
	else
		element.classList = ["hidden"];
}

(function animloop(){
  requestAnimFrame(animloop);
  render();
})();
