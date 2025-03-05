'use strict';

const loading = document.querySelector('#loading');
window.onload = function () {
  setTimeout(function () {
    loading.style.opacity = '0';
    loading.style.zIndex = '-1';
    loading.style.transition = 'all 300ms linear';
  }, 4000);
};