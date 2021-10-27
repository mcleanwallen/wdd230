var temp = document.getElementById("normalTemp").value;
var wind = document.getElementById("wind").value;

var xTemp = parseFloat(temp);
var xWind = parseFloat(wind);

var windchill = 35.74 + (.6215 * xTemp) - (35.75 * (xWind ^ .16)) + (.4275 * xTemp * (xWind ^ .16));

document.getElementById("windchillTemp").innerHTML = windchill;