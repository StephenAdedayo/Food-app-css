let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('open');
};