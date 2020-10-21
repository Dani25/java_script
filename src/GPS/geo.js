get_geo_position();
function on_success(position){
	document.getElementById("latitude").innerHTML = "Latitude = " + position.coords.latitude;
	document.getElementById("longitude").innerHTML = "Longitude= " + position.coords.longitude;
	document.getElementById("acc").innerHTML = "Accuracy = "+position.coords.accuracy;
	document.getElementById("altitude").innerHTML = "Altitude = "+position.coords.altitude;	
	//var map_str = "http://maps.googleapis.com/maps/api/staticmap?"+"center="+position.coords.latitude+", "+ position.coords.longitute+"&size=400x300&maptype=hybrid&key=AIzaSyA-8hlvciV9gfdBvgLtaRytf8mb4vuLrtU";
	//var map_str = "https://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+ position.coords.longitute+"&zoom=3&size=600x300&key=AIzaSyA-8hlvciV9gfdBvgLtaRytf8mb4vuLrtU";
	//document.getElementById("map").setAttribute("src",map_str);
	var latlon = position.coords.latitude + "," + position.coords.longitude;

  	var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&key=AIzaSyA-8hlvciV9gfdBvgLtaRytf8mb4vuLrtU";

  	document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
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
