window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt)
{
	var alpha = evt.alpha;
	var beta = evt.beta;
	var gamma = evt.gamma;
		
	document.getElementById("a").innerHTML = "alpha = "+alpha.toString();
	document.getElementById("b").innerHTML = "beta = "+beta.toString();
	document.getElementById("c").innerHTML = "gamma = "+gamma.toString();

}