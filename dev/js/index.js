"use strict";
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const toggleMenu = document.getElementById('toggle-menu');
const move = document.querySelector('.topbar-marvel')

main.addEventListener("click",(e) => {
    if (e.target.id == 'toggle-menu' || e.target.parentElement.id == 'toggle-menu') {
        console.log('tocaste el toggle');
        sidebar.classList.toggle('active');
        main.classList.toggle('active');
        toggleMenu.classList.toggle('show');
        move.classList.toggle('move');
    }
});