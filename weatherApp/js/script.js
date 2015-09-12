function main() {
  var metric = true;

  getLoc(getWeatherData);

  $("#convert").click(function(){
    if(metric === true) {
      metric = false; // toggle
      var fahr = convertFahr($("#tempDisplay").text());
      var windMilesPerHour = convertMilesPerHour($("#windDisplay").text());
      $("#tempDisplay").text(fahr);
      $("#windDisplay").text(windMilesPerHour);
      $("#windMeasure").text(" miles/hour ");
      $("#tempMeasure").text("F");
    } else { // metric is false
      metric = true; // toggle
      var celsius = convertCelsius($("#tempDisplay").text());
      var windMetersPerSecond = convertMetersPerSec($("#windDisplay").text());
      $("#tempDisplay").text(celsius);
      $("#windDisplay").text(windMetersPerSecond);
      $("#windMeasure").text(" meters/sec ");
      $("#tempMeasure").text("C");
    }
  });
}

// get geolocation information
function getLoc(callback) {

  if(!navigator.geolocation) {
    $("#cityName").text("Geolocation is not enabled by your browser.");
    return;
  } // end if

  // on success, get latitude and longitude
  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    callback(latitude, longitude);
  } // end success()

  // on error, display an error
  function error() {
    $("#cityName").text("Unable to retrieve your location.");
    return;
  } // end error()

  return navigator.geolocation.getCurrentPosition(success, error);
} // end getLoc()

function getWeatherData(latitude, longitude){
  var url = "http:\/\/api.openweathermap.org/data/2.5/weather?lat=" + latitude
  + "&amp;lon=" + longitude;

  // openweathermap API AJAX call
  $.get(url, function(response) {
    displayData(response);
    return response;
  }); // end HTTP get
} // end getWeatherData()

function displayData(response) {
  var city = response.name;
  var country = response.sys.country;
  var temp = (response.main.temp - 273.15).toFixed(2); // temperature in celsius
  var description = response.weather[0].description;
  $("#cityName").text(city + ", " + country);
  $("#temp").html("<h3>Temperature</h3><p>" + "<span id=\"tempDisplay\">"
    + temp + "</span>" + " &#176;<span id=\"tempMeasure\">C</span></p>");
  $("#weather").html("<h3>Weather</h3><p>" + description + "</p>");
  $("#wind").html("<h3>Wind</h3><p>" + "<span id=\"windDisplay\">"
    + response.wind.speed + "</span>" + "<span id=\"windMeasure\"> meters/sec </span>"
    + windDirection(response.wind.deg) + "</p>");
} // end displayData()

// function for translating numerical wind direction into cardinal directions
function windDirection(degree) {
  if (degree <= 25 || degree >= 335 ) {
    return "N";
  } else if (degree > 25 && degree <= 65) {
    return "NE";
  } else if (degree > 65 && degree <= 115) {
    return "E";
  } else if (degree > 115 && degree <= 155) {
    return "SE";
  } else if (degree > 155 && degree <= 205) {
    return "S";
  } else if (degree > 205 && degree <= 245) {
    return "SW";
  } else if (degree > 245 && degree <= 295) {
    return "W";
  } else {
    return "NW";
  } // end if-else
} // end windDirection()

// function for converting celsius temperature to fahrenheit
function convertFahr (celsiusTemp) {
  return (((9/5) * celsiusTemp) + 32).toFixed(2);
} // end convertFahr()

// function for converting fahrenheit to celsius
function convertCelsius(fahrTemp) {
  return ((5/9) * (fahrTemp - 32)).toFixed(2);
} // end convertCelsius()

// function for converting meters per second to miles per hour
function convertMilesPerHour (metersPerSec) {
  return (metersPerSec * (3125/1397)).toFixed(2);
} // end convertMilesPerHour()

// function for converting miles per hour to meters per second
function convertMetersPerSec (milesPerHour) {
  return (milesPerHour * (1397/3125)).toFixed(2);
} // end convertMetersPerSec()

$(document).ready(main);
