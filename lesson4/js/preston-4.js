const d = new Date();
document.getElementById('currentYear').innerHTML = d.getFullYear();

document.getElementById('lastModified').innerHTML = document.lastModified

function toggleMenu() {
    document.getElementsByClassName("navigation").classList.toggle("responsive")
}