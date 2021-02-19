// 要求生成n-m的随机整数，且几率相等

function intRandom(min, max) {
  let numberCount = max - min + 1;
  return Math.floor(Math.random() * numberCount) + min;
}

let count = {
  '1': 0,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0,
};
for (i = 0; i < 1000000; i++) {
  let num = intRandom(1, 5).toString();
  count[num]++
}
console.log(count)