// 祝日の配列
holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文で祝日の要素をconsole_logに列挙させる
for (let i = 0; i <= 15; i += 1) {
  console.log('for文:' + holidays[i]);
}

// while文で祝日の要素をconsole_logに列挙させる
let j = 0;
while (j <= 15) {
  console.log('while文:' + holidays[j]);
  j += 1;
}