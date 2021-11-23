const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date;
const requestURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=42.09&lon=-111.87&units=imperial&exclude=current,minutely,hourly,alerts&appid=ae5d16101acf3ce3c331c608b6416c84";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 1; i < 7; i++ ) {
        let card = document.createElement('div');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');
        card.setAttribute("class","day");
        h2.textContent = weekdays[d.getDate()];
        h3.textContent = jsonObject.daily[i].temp.day;
        card.appendChild(h4);
        card.appendChild(h5);
        document.querySelector('section.fiveDay').appendChild(card);
    };
  });
