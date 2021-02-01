let str = "abbcccdddd     ";

// 统计字符串中的字符个数
function countChar(str) {
  let map = new Map();
  for (let val of str) {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1)
    } else {
      map.set(val, 1)
    }
  }
  return map;
}

console.log(countChar(str))
