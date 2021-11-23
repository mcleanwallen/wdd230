const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?q=Preston&units=imperial&appid=ae5d16101acf3ce3c331c608b6416c84";
fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);
    document.getElementById('current-condition').textContent =  jsObject.weather[0].main;
    const temp = jsObject.main.temp;
    document.getElementById('current-temp').textContent = temp;
    document.getElementById('current-humidity').textContent = jsObject.main.humidity;
    const wind = jsObject.wind.speed;
    document.getElementById('wind').textContent = wind;
    if ((temp <= 50) && (wind > 3)) 
    {
      document.getElementById('windchillTemp').textContent = jsObject.main.feels_like;
    }
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
  });
