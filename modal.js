'use strict';

// 手順
// ①【HTML】モーダルを開くためのボタンにそれぞれ「modal_btn_n」(n=1～4)のidをつける
// ②【HTML】モーダルウィンドウのもっとも外側のタグに「modal_design」のclassをつける
// ③【HTML/CSS】モーダルウィンドウ内に「<button class="modal_close"><img src="../common/image/modal_close.png" alt=""></button>」を入れて、style調整
// ④【CSS】「modal_design」を「display: none;」
// ⑤【CSS】「.akeru{display: block;}」

// 定数へ
// すべてのモーダルウィンドウ
const modal = document.querySelectorAll('.modal_design');

// 閉じるボタン
const close_btn = document.querySelectorAll('.modal_close');

// モーダルひらくぼたん
const m_btn_1 = document.getElementById('modal_btn_1');
const m_btn_2 = document.getElementById('modal_btn_2');
const m_btn_3 = document.getElementById('modal_btn_3');
const m_btn_4 = document.getElementById('modal_btn_4');



// 関数宣言
// モーダル閉じ
function modal_close(event) {
  event.preventDefault();
  for (let item of modal) {
    item.classList.remove('akeru');
  }
}

// モーダル開け
function modal_open(event) {
  event.preventDefault();
  modal[this.name].classList.add('akeru');
}



// ボタンと関数の紐づけ
for (let item of close_btn) {
  item.addEventListener('click', modal_close);
}


// #modal_1
m_btn_1.addEventListener('click', { name: 0, handleEvent: modal_open });

// #modal_2
m_btn_2.addEventListener('click', { name: 1, handleEvent: modal_open });

// #modal_3
m_btn_3.addEventListener('click', { name: 2, handleEvent: modal_open });

// #modal_4
m_btn_4.addEventListener('click', { name: 3, handleEvent: modal_open });