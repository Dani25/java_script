var c1=document.getElementById("cerc1");

c1.addEventListener("touchmove", on_touch_move);

function on_touch_move(e){
	
	var t = e.changedTouches[0];
	c1.getAttribute("cx",t.pageX);
	c1.getAttribute("cy",t.pageY);
	}