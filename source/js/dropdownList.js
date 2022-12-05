/* Выпадающий список описаний */

let listItems = document.querySelectorAll('.nation__item-title');
let descriptions = document.querySelectorAll('.nation__item-description');
let descriptionToggles = document.querySelectorAll('.nation__toggle');

descriptions.forEach(element => element.classList.remove('nation__item-description--nojs')
);

listItems.forEach(item => item.addEventListener('click', function() {
  let index = Array.from(listItems).indexOf(this);

  descriptions[index].classList.toggle('nation__item-description--shown');
  pressToggle(descriptionToggles, index);
}));

function pressToggle(element, i) {
  let isToggleOpen = element[i].classList.contains('nation__toggle--open');

  if (isToggleOpen) {
    element[i].classList.remove('nation__toggle--open');
    element[i].classList.add('nation__toggle--close');
  } else {
    element[i].classList.remove('nation__toggle--close');
    element[i].classList.add('nation__toggle--open');
  }
};
