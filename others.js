'use strict';

// ↓ヘッダー↓

// 以上ドロワーメニュー開閉
// メニュー領域を定数へ設定
const menu = document.getElementById('nav');

// 関数宣言

// 開くとき
function open() {
  document.getElementById('menu_btm_o').style.display = 'none';
  menu.style.right = '0px';
};

// 閉じるとき
function close() {
  document.getElementById('menu_btm_o').style.display = 'block';
  menu.style.right = '-60%';
};

// 各ボタンと関数の紐づけ
document.getElementById('menu_btm_o').addEventListener('click', open);
document.getElementById('menu_btm_c').addEventListener('click', close);

// 以上ドロワーメニュー開閉



// 以下右下の文字表示
// 右下の文字表示エリアを取得
const migisita = document.getElementById('header_migisita');

// 関数宣言
function migisita_hyouji() {

  // ページに合わせて内容を変えたいので、titleタグに囲まれた文字列を取得。
  const page_title = document.querySelector('title').textContent;

  // 文字列で場合分け
  if (page_title === '台北 | TAIWAN') {

    migisita.textContent = '台北市は台湾の中心地です。活気にあふれる街台北では、さまざまな建物や台北を生きる人々の美しい風景を見ることができます。';

  } else if (page_title === '台中 | TAIWAN') {

    migisita.textContent = '台湾で2番目の大都市を誇る台中市。台中市は台湾中部の台中盆地にあり、いくつもの河川が台中市の中心地を貫いています。';

  } else if (page_title === '台南 | TAIWAN') {

    migisita.textContent = '台湾の古都「台南」お寺などの史跡巡りや、リノベエリアの散策が楽しめる、新旧の魅力が交わる街です。';
  }

  // 表示！
  migisita.style.opacity = '1';
}

// ページ読み込み時、一瞬待ってから起動
window.addEventListener('load', migisita_hyouji);

// 以上右下の文字表示

// ↑ヘッダー↑




// 以下パンくずメニュー

// パンくずメニューのnav要素を取得
const bread = document.getElementById('bread');

// titleがTAIWAN(top)のページにいる時は非表示、その他のページにいる時は表示
const page_title = document.querySelector('title').textContent;
if (page_title === 'TAIWAN') {
  bread.style.display = 'none';
} else {
  bread.style.display = 'block';
}

// 現在表示されている下層ページに合わせた名前の変更
const this_name = document.getElementById('this_page');
if (page_title === '台北 | TAIWAN') {
  this_name.textContent = '台北';
} else if (page_title === '台中 | TAIWAN') {
  this_name.textContent = '台中';
} else if (page_title === '台南 | TAIWAN') {
  this_name.textContent = '台南';
}

// 以上パンくずメニュー