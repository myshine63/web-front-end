let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flatArray(arr) {
  let res = []
  for (let val of arr) {
    if (Array.isArray(val)) {
      res = res.concat(flatArray(val))
    } else {
      res.push(val)
    }
  }
  return res
}

console.log(flatArray(arr))