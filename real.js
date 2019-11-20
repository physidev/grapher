
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame    ||
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

var scale, transX, transY, res, zoomIntensity;
var canvas, c;
var start = null;
var colors = ["rgb(0, 125, 125)", "rgb(125, 125, 0)", "rgb(125, 0, 125)"];
var functions = [math.parse("x^2")];

function init() {
	res = 5.0;
	scale = 50.0;
	transX = 2.0;
	transY = 2.0;
	zoomIntensity = 0.1;
	
	var drag = false;
	var dragStart;
	var dragEnd;

	canvas = document.getElementById('graph');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	c = canvas.getContext('2d');
	
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
	
	var resSlider = document.getElementById("resolution");
	resSlider.addEventListener("input", event => {
		console.log("Hello");
		res = this.value;
	});
	
	updateText();
}

function render() {

	c.setTransform(1, 0, 0, 1, 0, 0);
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.scale(scale, scale);
	c.translate(transX, -transY);
	c.font = "15px Arial";
	
	//draw gridlines
	c.strokeStyle = 'rgb(150,150,150)';
	c.lineWidth = 1/scale;
	
	var scaleExponent = Number.parseFloat(scale.toExponential(1).substring(4))-1;
	var grade = Math.pow(10, -scaleExponent);
	
	
	document.getElementById('stats').innerHTML = 'scale: ' + scale + '<br>transX: ' + transX + '<br>transY: ' + transY + '<br>scaleExponent: ' + scaleExponent + '<br>grade: ' + grade;
	
	//vertical gridlines
	document.getElementById('stats').innerHTML += '<br>: ' + grade*Math.floor(-transX/grade);
	for(let x=grade*Math.floor(-transX/grade); x < canvas.width/scale - transX; x+=grade) {
	
		if(x % (5*grade) == 0) {
			c.scale(1/scale, 1/scale);
			c.fillText(truncateToDecimals(x, scaleExponent>1 ? scaleExponent : 1), scale*x, canvas.height - 2);
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
	
	//get function
	var fields = document.getElementsByClassName('field');
	
	c.lineWidth = 4/scale;
	//draw graphs
	for(let i=0; i<fields.length; i++) {
		
		var f = functions[i];
		
		c.strokeStyle = colors[i % colors.length];
		c.moveTo(0, (canvas.height-f.eval({x: 0}))/scale);
		c.beginPath();
		
		//draw each segment
		for(let i=-transX; i<canvas.width/scale - transX; i+=res/scale) {
			c.lineTo(i, canvas.height/scale - f.eval( {x: i } ) );
		}
		c.stroke();
	}
}

function updateRes() {
	res = document.getElementById("resolution").value;
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

function truncateToDecimals(num, dec = 2) {
	const calcDec = Math.pow(10, dec);
	return Math.trunc(num * calcDec) / calcDec;
}

function addFunction() {
	
	document.getElementById("functions").insertAdjacentHTML("beforeend","<div class=\"function-pair\">" +
					"<textarea oninput=\"updateText();\" class=\"field\">x^2</textarea>" +
					"<div class=\"fieldDisplay\"></div>" +
				"</div>" 
	);
				
	return false;
}

(function animloop(){
  requestAnimFrame(animloop);
  render();
})();
