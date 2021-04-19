var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let res = 0
  let m = x;
  while (m !== 0) {
    res = res * 10 + m % 10;
    m = parseInt(m / 10);
  }
  return x === res;
};

console.log(isPalindrome(11211))