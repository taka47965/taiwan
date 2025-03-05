'use strict';

let scroll_animation = document.querySelectorAll('.js_scroll_animation');

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  const window_height = window.innerHeight;
  for (let target of scroll_animation) {

    const target_point = target.getBoundingClientRect().top + scroll;
    if (scroll > target_point - window_height + 50) {
      target.classList.add('appearance');
    }
  }
});