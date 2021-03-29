function countChar(str) {
  if (!str || str.length === 1) {
    return str;
  }
  let res = '';
  let flag = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === flag) {
      count++
    } else {
      if (count > 1) {
        res += flag + count
      } else {
        res += flag;
      }
      flag = str[i];
      count = 1
    }
  }
  if (count > 1) {
    res += flag + count
  } else {
    res += flag;
  }
  return res
}

console.log(countChar('aabcc'))