// あたえられた引数numを2乗にする関数を定義する
const square = (num) => {
  console.log(`${num}の2乗は${num ** 2}です`);
}

// 1～20でランダムに生成された整数をrandomIntと定義する
const randomInt = Math.floor(Math.random() * 19 + 1);

// 関数を呼び出し、引数としてrandomIntを渡す
square(randomInt);
