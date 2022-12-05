/* Открытие/закрытие меню mobile/tablet версий */

let mainNav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

/* Открытие/закрытие подменю */

let subNav = document.querySelector('.submenu');
let subToggle = document.querySelector('.submenu__toggle');

subNav.classList.remove('submenu--nojs');

subToggle.addEventListener('click', function() {
  if (subNav.classList.contains('submenu--closed')) {
    subNav.classList.remove('submenu--closed');
    subNav.classList.add('submenu--opened');
  } else {
    subNav.classList.add('submenu--closed');
    subNav.classList.remove('submenu--opened');
  }
});

document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('click', function(e) {
    const target = e.target
    if (!target.closest('.submenu') && !target.closest('.submenu__toggle')) {
      subNav.classList.add('submenu--closed');
      subNav.classList.remove('submenu--opened');
    };
  })
});

document.addEventListener('keyup', function(e) {
  if (e.key === 'Escape') {
    subNav.classList.add('submenu--closed');
    subNav.classList.remove('submenu--opened');
  }
});

subNav.addEventListener('mouseover', showSubNav);
subNav.addEventListener('mouseout', hideSubNav);

function showSubNav() {
  subNav.classList.remove('submenu--closed');
  subNav.classList.add('submenu--opened');
};

function hideSubNav() {
  subNav.classList.add('submenu--closed');
  subNav.classList.remove('submenu--opened');
};

/* Up scroll */

let upButton = document.querySelector('.up-button');

window.onscroll = function() {
  if (window.pageYOffset > 500) {
    upButton.classList.add('up-button--shown');
  } else {
    upButton.classList.remove('up-button--shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};
