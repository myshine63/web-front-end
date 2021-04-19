var myAtoi = function (s) {
  s = s.trim();
  let num = parseInt(s);
  if (isNaN(num)) {
    return 0
  }
  let maxInt = Math.pow(2, 31) - 1;
  let minInt = -Math.pow(2, 31);
  if (num <= maxInt && num >= minInt) {
    return num
  } else if (num < minInt) {
    return minInt
  } else {
    return maxInt
  }
}