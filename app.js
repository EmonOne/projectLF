
window.onload=function  () {
	createCanvas();
	drawRect ();
}
var canvas,context;
function createCanvas  () {
	document.body.innerHTML="<canvas id='myCanvas' width='700px' height='700px'></canvas>";
	canvas= document.getElementById('myCanvas');
	context=canvas.getContext("2d");
}

function drawRect () {
	context.fillStyle="#ff0000";
	context.fillRect(100,100,200,200);
}