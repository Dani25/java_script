var svg = document.getElementById("svg");
svg.addEventListener("touchstart",on_touch_start);

function random_color()
{
	var s="0123456789ABCDEF";
	var c ="#";
	for (var i=0; i<6;i++){
		var j= Math.floor(Math.random()*15);
		c +=s[j];
	}
	return c;
}
function on_touch_start(evt)
{
	for (var i=0; i<evt.touches.length;i++)
	{
		var t = evt.touches[i];
		var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		c.setAttribute("cx",t.pageX);
		c.setAttribute("cy",t.pageY);
		c.setAttribute("r",10);
		var color = random_color();
		c.setAttribute("stroke", color);
		c.setAttribute("fill",color);
		svg.appendChild(c);
	}
}