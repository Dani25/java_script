window.addEventListener("touchstart", on_touch_start);

function on_touch_start(evt)
{
	var touches = evt.changedTouches;
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	for (var i = 0; i< touches.length; i++)
	{
		context.beginPath();
		context.arc(touches[i].pageX, touches[i].pageY, 25, 0, 2* Math.PI);
		context.stroke();
	}
}