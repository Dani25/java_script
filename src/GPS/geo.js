get_geo_position();
function on_success(position){
	document.getElementById("latitude").innerHTML = "Latitude = " + position.coords.latitude;
	document.getElementById("longitude").innerHTML = "Longitude= " + position.coords.longitude;
	document.getElementById("acc").innerHTML = "Accuracy = "+position.coords.accuracy;
	document.getElementById("altitude").innerHTML = "Altitude = "+position.coords.altitude;	
	//var map_str = "http://maps.googleapis.com/maps/api/staticmap?"+"center="+position.coords.latitude+", "+ position.coords.longitute+"&zoom=17&size=400x300&key=AIzaSyArIA_t1lsVeGMDTwmjBKX-UbvwRaGq0T0";
	var map_str = var image_url = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + ',' + position.coords.longitude + "&zoom=14&size=300x400&markers=color:blue|label:S|" + position.coords.latitude + ',' + position.coords.longitude;
 
	document.getElementById("map").setAttribute("src",map_str);
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
