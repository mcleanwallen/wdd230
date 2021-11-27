const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let info = document.createElement('div');
        let title = document.createElement('h3');
        let motto = document.createElement('h4');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let photo = document.createElement('img');

        title.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;
        photo.setAttribute('src', 'images/index/'+towns[i].photo);
        info.setAttribute('class', towns[i].name.replace(/\s/g, '') + ' townInfo');
        
        if ((towns[i].name == 'Soda Springs') ||
            (towns[i].name == 'Fish Haven') ||
            (towns[i].name == 'Preston')) {
            info.appendChild(title);
            info.appendChild(motto);
            info.appendChild(year);
            info.appendChild(population);
            info.appendChild(rain);
            card.appendChild(info);
            card.appendChild(photo);
            document.querySelector('div.homePageTown').appendChild(card);
        }
    };
  });