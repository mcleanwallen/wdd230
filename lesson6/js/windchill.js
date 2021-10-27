var temp = document.getElementById("normalTemp").innerHTML;
var wind = document.getElementById("wind").innerHTML;

var xTemp = parseFloat(temp);
var xWind = parseFloat(wind);

let windchill = 35.74 + (.6215 * xTemp) - (35.75 * Math.pow(xWind,.16)) + (.4275 * xTemp * Math.pow(xWind,.16));

document.getElementById("windchillTemp").innerHTML = Math.trunc(windchill);