var convert = function (str, n) {
  if (n === 1) {
    return str
  }
  let res = '';
  let length = str.length;
  let cycleLen = 2 * n - 2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j + i < length; j += cycleLen) {
      res += str[j + i];
      if (i !== 0 && i !== n - 1 && j + cycleLen - i < length)
        res += str[j + cycleLen - i];
    }
  }
  return res;
}
console.log(convert('PAYPALISHIRING', 3))

