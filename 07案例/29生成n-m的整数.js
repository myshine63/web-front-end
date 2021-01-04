// 要求生成n-m的随机整数，且几率相等

function intRandom(n, m) {
  let num = m - n + 1;
  return Math.floor(Math.random() * num) + n;
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