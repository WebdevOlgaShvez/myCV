const hamburger = document.querySelector('.hamburger');
const headerWrapper = document.querySelector('.header-wrapper');
const overlay = document.querySelector('#overlay');
const elArr = [hamburger, headerWrapper, overlay];
const mainMenu = document.querySelector('.main-menu');
let active = false;

function toggleActive() {
  elArr.forEach(el => el.classList.toggle('active'));
  active === false ? active = true : active = false;
}

hamburger.addEventListener('click', toggleActive);
overlay.addEventListener('click', toggleActive);
mainMenu.addEventListener('click', () => {
  if (active) toggleActive();
});

//animation

let elements;
let windowHeight;

function init() {
  elements = document.querySelectorAll('.hidden');
  windowHeight = window.innerHeight;
}

function checkPosition() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= -100) {
      element.classList.add('animated');
      element.classList.remove('hidden');
    }
  }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();



//arrow-up

const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', function () {
  const pos = window.pageYOffset;
  if (pos > window.innerHeight) {
    buttonUp.classList.add('button-up-visible');
  }
  else {
    buttonUp.classList.remove('button-up-visible');
  }
})

buttonUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
