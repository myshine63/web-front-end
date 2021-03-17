let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten1 = function (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

function flatten2(arr) {
  let res = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      res = res.concat(flatten(val))
    } else {
      res.push(val)
    }
  }
  return res
}
