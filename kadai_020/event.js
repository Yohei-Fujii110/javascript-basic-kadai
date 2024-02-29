// id:textの要素を取得
const text = document.getElementById('text');

// id:btnの要素を取得
const btn = document.getElementById('btn');

// クリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // id:textの中身を書き換える
  text.textContent = 'ボタンをクリックしました'
});
