const requestURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=42.09&lon=-111.87&units=imperial&exclude=current,minutely,hourly,alerts&appid=ae5d16101acf3ce3c331c608b6416c84";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date;
    //Single Weather Summary
    document.getElementById('current-condition').textContent =  jsonObject.daily[0].weather[0].main;
    const temp = jsonObject.daily[0].temp.day;
    document.getElementById('current-temp').textContent = temp;
    document.getElementById('current-humidity').textContent = jsonObject.daily[0].humidity;
    const wind = jsonObject.daily[0].wind_speed;
    document.getElementById('wind').textContent = wind;
    if ((temp <= 50) && (wind > 3)) 
    {
      document.getElementById('windchillTemp').textContent = jsonObject.daily[0].feels_like.day;
    }
    // 5-day Forecast
    for (let i = 1; i < 6; i++ ) {
        let card = document.createElement('div');
        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');
        card.setAttribute("class","day");
        h4.textContent = weekdays[(d.getDate()+i)%7];
        p1.textContent = "High: " + jsonObject.daily[i].temp.max +"\u00B0 F";
        p2.textContent = "Low: " + jsonObject.daily[i].temp.min +"\u00B0 F";
        img.setAttribute("src",
        "https://openweathermap.org/img/w/" + 
        jsonObject.daily[i].weather[0].icon + 
        ".png"); // note the concatenation
        img.setAttribute("alt", jsonObject.daily[i].weather[0].description);
        card.appendChild(h4);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(img);
        document.querySelector('section.fiveDay').appendChild(card);
    };
  });
