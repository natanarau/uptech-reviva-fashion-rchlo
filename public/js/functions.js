const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__ul');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu__ul--active');
});
