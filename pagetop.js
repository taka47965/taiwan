'use strict';

const btn = document.querySelector('#top_return');
const image = document.querySelector('.return_a');
const header_area = document.querySelector('header').offsetHeight;
const footer_color = document.querySelector('.footer_color');
const window_height = window.innerHeight;

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  const target = footer_color.getBoundingClientRect().top + scroll;

  if (scroll < header_area) {
    image.style.opacity = '0';
    image.style.zIndex = '-50';
    image.classList.remove('change');
  } else if (scroll > target - window_height) {
    image.classList.add('change');
  } else if (scroll > header_area) {
    image.classList.remove('change');
    image.style.opacity = '1';
    image.style.zIndex = '50';
  } else {
    image.classList.remove('change');
  }
});
