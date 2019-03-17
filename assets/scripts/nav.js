document.getElementById("hamburger").addEventListener("click", toggleNav);
window.addEventListener('resize', restoreNav)
var nav = document.querySelectorAll('.navigation li')

function toggleNav() {
    nav[0].style.display != "block" ? nav.forEach(li => li.style.display = "block") : nav.forEach(li => li.style.display = "none")
}

function restoreNav() {
    window.innerWidth >= 600 ? nav.forEach(li => li.style.display = "inline") : nav.forEach(li => li.style.display = "none")
}