// id:textの要素を取得
const text = document.getElementById('text');

// id:btnの要素を取得
const btn = document.getElementById('btn');

// btn要素がclickされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2000ミリ秒後にtext要素内のテキストを変更する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
