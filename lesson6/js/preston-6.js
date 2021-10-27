const d = new Date();
const months = ["January", "February", "March",
 "April", "May", "June", "July", "August", 
 "September", "October", "November", "December"]; 
document.getElementById('currentYear').innerHTML =  d.getFullYear();

document.getElementById('lastModified').innerHTML = d.getDate() + months[d.getMonth()] + d.getFullYear();


//Preston Pancakes Display


  var x = document.getElementById("saturdayPancakes");
  if (d.getDay() !== 5) {
      x.style.display = "none";
  }

//Responsive Menu

const hambutton = document.querySelector('.hamButton');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 1050) mainnav.classList.remove('responsive')};

function toggleMenu() {
    document.getElementsByClassName("navigation").classList.toggle("responsive")
}