const api =
  "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);
    let card = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.textContent = "Upcoming Events";
    card.appendChild(h4);
    for (let i = 0; i < Object.keys(jsObject.towns[2].events).length; i++ ) {
      let p1 = document.createElement('p');
      p1.setAttribute("class", "eventNumber" + i);
      p1.textContent = jsObject.towns[2].events[i];
      card.appendChild(p1);
    };
    document.querySelector('section.upcomingEvents').appendChild(card);
  });