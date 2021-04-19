// 统计字符串中的字符个数
function countChar(str = '') {
  let res = new Map();
  for (let val of str) {
    if (res.has(val)) {
      res.set(val, res.get(val) + 1)
    } else {
      res.set(val, 1)
    }
  }
  return res;
}

console.log(countChar('hello tom'))