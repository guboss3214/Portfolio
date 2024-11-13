document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('#burger')
  const span = burger.querySelectorAll('span')
  const menu = document.querySelector('.navbar__menu')
  span.forEach(el => el.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
  }));
});

document.addEventListener('scroll',(e) => {
  const e = e.target
})