/* Открытие/закрытие модального окна с документами */

let docModal = document.querySelector('.doc-modal');
let docModalToggle = document.querySelector('.doc-modal__toggle');
let docModalImg = document.querySelector('.doc-modal__img');
let docLinks = document.querySelectorAll('.documents__button');
let alts = document.querySelectorAll('.documents__text');

docModal.classList.remove('doc-modal--nojs');

docLinks.forEach(link => link.addEventListener('click', function(e) {
  e.preventDefault();
  let index = Array.from(docLinks).indexOf(this);
  let link = docLinks[index].getAttribute('href');
  let altText = alts[index].textContent;

  docModal.classList.remove('doc-modal--closed');
  docModalImg.src = link;
  docModalImg.setAttribute('alt', altText);
}));

document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('click', function(e) {
    const target = e.target
    if (target.closest('.doc-modal__wrapper')) {
      docModal.classList.add('doc-modal--closed');
    }
  })

  document.addEventListener('keyup', function(e) {
    if( e.key === 'Escape' ){
      docModal.classList.add('doc-modal--closed');
    }
  })
});
