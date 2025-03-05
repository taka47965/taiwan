'use strict';

// スライダー
// 変数宣言
let now_page = 1;

const slide = document.querySelector('.slide');

const btn_1 = document.getElementById('slide_btn_1');
const btn_2 = document.getElementById('slide_btn_2');
const btn_3 = document.getElementById('slide_btn_3');
const btn_4 = document.getElementById('slide_btn_4');
const btn_5 = document.getElementById('slide_btn_5');

const btn_prev = document.getElementById('slide_btn_left');
const btn_next = document.getElementById('slide_btn_right');

const sp_prev = document.querySelectorAll('.sp_prev_btn');
const sp_next = document.querySelectorAll('.sp_next_btn');

// 関数宣言

// ページジャンプ
function jump() {
  if (now_page !== this.name) {
    now_page = this.name;
    page_slide();
  }
}

// 次のページ
function next() {
  if (now_page < 5) {
    now_page++;
    page_slide();
  }
}

// 前のページ
function prev() {
  if (now_page >= 2) {
    now_page--;
    page_slide();
  }
}

// 表示切替
function page_slide() {
  if (now_page === 1) {
    slide.classList.remove('slide2', 'slide3', 'slide4', 'slide5');
    slide.classList.add('slide1');
    btn_1.classList.add('now_page');
    btn_2.classList.remove('now_page');
    btn_3.classList.remove('now_page');
    btn_4.classList.remove('now_page');
    btn_5.classList.remove('now_page');
  } else if (now_page === 2) {
    slide.classList.remove('slide1', 'slide3', 'slide4', 'slide5');
    slide.classList.add('slide2');
    btn_1.classList.remove('now_page');
    btn_2.classList.add('now_page');
    btn_3.classList.remove('now_page');
    btn_4.classList.remove('now_page');
    btn_5.classList.remove('now_page');
  } else if (now_page === 3) {
    slide.classList.remove('slide1', 'slide2', 'slide4', 'slide5');
    slide.classList.add('slide3');
    btn_1.classList.remove('now_page');
    btn_2.classList.remove('now_page');
    btn_3.classList.add('now_page');
    btn_4.classList.remove('now_page');
    btn_5.classList.remove('now_page');
  } else if (now_page === 4) {
    slide.classList.remove('slide1', 'slide2', 'slide3', 'slide5');
    slide.classList.add('slide4');
    btn_1.classList.remove('now_page');
    btn_2.classList.remove('now_page');
    btn_3.classList.remove('now_page');
    btn_4.classList.add('now_page');
    btn_5.classList.remove('now_page');
  } else if (now_page === 5) {
    slide.classList.remove('slide1', 'slide2', 'slide3', 'slide4');
    slide.classList.add('slide5');
    btn_1.classList.remove('now_page');
    btn_2.classList.remove('now_page');
    btn_3.classList.remove('now_page');
    btn_4.classList.remove('now_page');
    btn_5.classList.add('now_page');
  }
}


// ボタンとファンクションの紐づけ
btn_1.addEventListener('click', { name: 1, handleEvent: jump });
btn_2.addEventListener('click', { name: 2, handleEvent: jump });
btn_3.addEventListener('click', { name: 3, handleEvent: jump });
btn_4.addEventListener('click', { name: 4, handleEvent: jump });
btn_5.addEventListener('click', { name: 5, handleEvent: jump });

btn_prev.addEventListener('click', prev);
btn_next.addEventListener('click', next);

for (let item of sp_prev) {
  item.addEventListener('click', prev);
}
for (let item of sp_next) {
  item.addEventListener('click', next);
}

// 時間経過でスライド
// slide本体
function slide_go() {
  if (now_page < 5) {
    now_page++;
    page_slide();
  } else {
    now_page = 1;
    page_slide();
  }
}

// 五秒ごとにきりかえ
setInterval(slide_go, 5000);


// 画面に入ったら表示
//アニメーションさせたい要素を取得
let targets = document.querySelectorAll('.js_scroll_fade');

// scrollしたとき
window.addEventListener('scroll', function () {
  //スクロール量を取得
  var scroll = window.scrollY;
  //画面の高さを取得
  var windowHeight = window.innerHeight;

  //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
  for (let target of targets) {
    //ターゲット要素の位置を取得（スクロールを+することで相対位置を絶対位置に）
    var targetPos = target.getBoundingClientRect().top + scroll;
    //スクロール量 > ターゲット要素の位置+200pxくらい（かすめただけででてくると味気ないので）
    if (scroll > targetPos - windowHeight + 200) {
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
});