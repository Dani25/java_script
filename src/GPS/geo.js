get_geo_position();
function on_success(position){
	document.getElementById("text").innerHTML = position.coords.latitude + " " + position.coords.longitude;
}
function on_error(e)
{
	document.getElementById("text").innerHTML = e.message;
}

var geo_params = {
	enableHighAccuracy:true,
	timeout:1000,
	maximumAge:0
};

function get_geo_position()
{
	var geo = navigator.geolocation;
	geo.getCurrentPosition(on_success, on_error, geo_params)
}