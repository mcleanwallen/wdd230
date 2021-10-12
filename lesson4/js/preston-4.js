const d = new Date();
document.getElementById('currentYear').innerHTML = d.getFullYear();

document.getElementById('lastModified').innerHTML = document.lastModified


//Responsive Menu

const hambutton = document.querySelector('.hamButton');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 1050) mainnav.classList.remove('responsive')};

function toggleMenu() {
    document.getElementsByClassName("navigation").classList.toggle("responsive")
}