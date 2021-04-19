// 翻转数字
function reverse(num) {
  if (num > 9) {
    let m = num % 10;
    let n = Math.floor(num / 10);
    return String(m) + reverse(n)
  } else {
    return String(num)
  }
}

let a = reverse(123);
console.log(a)