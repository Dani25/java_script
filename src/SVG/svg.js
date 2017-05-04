var c1=document.getElementById("cerc1");
var c2=document.getElementById("c2");
c1.addEventListener("touchmove", on_touch_move);
c2.addEventListener("touchmove", on_touch_move);

function on_touch_move(e)
{
	for (var i=0;i<e.changedTouches.length;i++)
	{
		var t = e.changedTouches[i];
		var c = t.target;
		c.setAttribute("cx",t.pageX);
		c.setAttribute("cy",t.pageY);
	}
}