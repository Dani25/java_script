window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt)
{
	var alpha = evt.alpha;
	var beta = evt.beta;
	var gamma = evt.gamma;
		
	document.getElementById("a").innerHTML = "alpha = "+alpha;
	document.getElementById("b").innerHTML = "beta = "+beta;
	document.getElementById("c").innerHTML = "gamma = "+gamma;
	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,canvas.width, canvas.height);
	var raza = 50; 
	var centru = {x:canvas.width/2, y:canvas.height/2}
		
	context.beginPath();
	context.arc(centru.x+gamma*(canvas.width/2-raza)/90, centru.y+beta*(canvas.height/2-raza)/90, raza, 0, 2 * Math.PI);
	context.stroke();
}
