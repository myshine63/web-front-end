// (,),*. 其中*可以表示空白，又括号，左括号

function checkValidString(s) {
  let min = 0;
  let max = 0;
  for (let c of s) {
    if (c === '(') {
      min++;
      max++;
    } else if (c === '*') {
      if (min > 0) {
        min--;
      }
      max++;
    } else {
      if (min > 0) {
        min--
      }
      max--
    }
    if (max < 0) {
      return false
    }
  }
  return min === 0
}