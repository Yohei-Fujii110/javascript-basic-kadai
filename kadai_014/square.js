// あたえられた引数numを2乗にする関数を定義する
const square = (num) => {
  console.log(`${num}の2乗は${num ** 2}です`);
}

// 1～100の任意の整数を生成する
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * 99 + 1);
}

// 生成された整数をrandomIntと定義する
const randomInt = getRandomInt();

// 関数を呼び出し、引数としてrandomIntを渡す
square(randomInt);