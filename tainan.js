'use strict';

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
    //ターゲット要素の位置を取得
    var targetPos = target.getBoundingClientRect().top + scroll;
    //スクロール量 > ターゲット要素の位置+250pxくらい（かすめただけででてくると味気ないので）
    if (scroll > targetPos - windowHeight + 200) {
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
});