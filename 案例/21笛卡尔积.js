// 给一个二维数组，输出其所有笛卡尔积组合，例如：[['a', 'b'], ['c', 'd'], ['e']] => ['ace', 'ade', 'bce', 'bde']
function f(arr) {
  function print(current, res) {
    let currentRes = []
    if (res.length) {
      for (let m of res) {
        for (let n of current) {
          currentRes.push(m + n)
        }
      }
      return currentRes
    } else {
      return current
    }
  }

  let res = []
  for (val of arr) {
    res = print(val, res)
  }
  return res
}

console.log(f([['a', 'b'], ['c', 'd'], ['e']]))