const reverse = function (x) {
  let res = 0;
  let maxInt = Math.pow(2, 31) - 1;
  let minInt = -Math.pow(2, 31);
  while (x !== 0) {
    let pop = x % 10;
    x = parseInt(x / 10);
    if (res > parseInt(maxInt / 10) || (res === parseInt(maxInt / 10) && pop > 7)) {
      return 0
    }
    if (res < parseInt(minInt / 10) || (res === parseInt(minInt / 10) && pop < -8)) {
      return 0
    }
    res = res * 10 + pop;
  }
  return res
}

console.log(reverse(-123))