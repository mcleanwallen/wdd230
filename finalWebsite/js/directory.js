const requestURL =
  "js/business.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = business[i].name;
        let type = document.createElement('p');
        type.textContent = "Industry: "+business[i].type;
        let phone = document.createElement('p');
        phone.textContent ="Phone: "+business[i].phone;
        let ad = document.createElement('p');
        ad.textContent ="Address: "+business[i].streetaddress+", "+business[i].citystatezip;
        let about = document.createElement('p');
        about.textContent = business[i].about;
        card.appendChild(h3);
        card.appendChild(type);
        card.appendChild(phone);
        card.appendChild(ad);
        card.appendChild(about);
        document.querySelector('section.cards').appendChild(card);
    };
  });