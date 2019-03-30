document.getElementById("hamburger").addEventListener("click", toggleNav);
window.addEventListener('resize', restoreNav)
var nav = document.querySelector('.navigation')

function toggleNav() {
    nav.classList.toggle('showmob')
    nav.classList.toggle('hidemob')
}

function restoreNav() {
    
    if (window.innerWidth >= 800) {
        nav.classList.remove('hidemob')
        nav.classList.add('showmob')
        }
        else {
            nav.classList.remove('showmob')
        nav.classList.add('hidemob')
        }
}