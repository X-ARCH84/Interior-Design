const bars = document.getElementsByClassName('fa-bars')[0];
const mark = document.getElementsByClassName('fa-xmark')[0];
const menu = document.getElementsByClassName('menu')[0];
const header = document.getElementsByClassName('header')[0];
const logo = document.getElementsByClassName('logo')[0];

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        header.style = '';
        menu.classList.remove('showMenu');
        logo.style = '';
        menu.style = 'display: none';
        bars.style = 'display: inline';
        mark.style = 'display: none';
    } else {
        header.style = 'flex-direction: column';
        menu.classList.add('showMenu');
        logo.style = 'display: none';
        menu.style = 'display: flex';
        bars.style = 'display: none';
        mark.style = 'display: inline';
    }
}