// 1以上10000以下の自然数を生成する
var min = 1;
var max = 10000;
let num = Math.floor(Math.random() * (max + 1 - min)) + min;

// 生成数確認
console.log(num);

// 判定結果
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}
