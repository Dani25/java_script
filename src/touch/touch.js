window.addEventListener("touchstart", on_touch_start);
var touch_colors = ["#FF0000", "#00FF00", "#0000FF", "0F0F00"];
function on_touch_start(evt)
{
	var touches = evt.changedTouches;
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	for (var i = 0; i< touches.length; i++)
	{
		context.beginPath();
		context.strokeStyle = touch_colors[i];
		context.arc(touches[i].pageX, touches[i].pageY, 25, 0, 2* Math.PI);
		context.stroke();
	}
}