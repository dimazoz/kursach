'use strict';

const burgerBtn = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

const toggleMenu = () => {
    burgerBtn.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
}

burgerBtn.addEventListener('click', () => {
    toggleMenu();
    console.log(menu)
});

