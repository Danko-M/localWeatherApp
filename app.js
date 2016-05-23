$(document).ready(function() {

	var lat = "lat=",
			lon = "&lon=",
			api = "http://api.openweathermap.org/data/2.5/weather?",
			id  = "&?id=524901&APPID=46c8566d930113e751de9d95251e8d8e";
  
	function getWeather () {
		$.getJSON( api + lat + lon + id, function(json) { 
			var temperature  = json.main.temp,
					toCelsius    = (temperature - 273.15).toFixed(1) + ' \xB0C',
					toFahrenheit =  (temperature * 9/5 - 459.67).toFixed(1) + ' \xB0F',
					windSpead		 = json.wind.speed + " m/s",
					clouds			 = json.clouds.all + " %",
					humidity		 = json.main.humidity + " %",
					icon				 = "<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' >" ; 

			document.getElementById("country").innerHTML = json.sys.country;			
      document.getElementById("area").innerHTML = json.name;			
      document.getElementById("temperatureC").innerHTML = toCelsius;			
      document.getElementById("temperatureK").innerHTML = toFahrenheit;			
      document.getElementById("wind").innerHTML = windSpead;			
      document.getElementById("clouds").innerHTML = clouds;			
      document.getElementById("humidity").innerHTML = humidity;			
      document.getElementById("icon").innerHTML = icon;
		});	// end $.getJSON			
  } // end getWeather()
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat += position.coords.latitude;
      lon	+= position.coords.longitude;    
      getWeather();
    });			
  } // end if
  
}); // document.ready