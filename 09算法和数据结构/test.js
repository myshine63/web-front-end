// 1. 给一个日期，某年某月某天，例如  2021-06-10，判定这是今年的第几天
function getDay(dateStr) {
  let count = 0;
  let date = new Date(dateStr);
  let month = date.getMonth() + 1;
  for (let i = 0; i < month; i++) {
    count += date.getDate();
    date.setDate(0);
  }
  return count;
}

console.log(getDay('2020-02-29'))


//2. 给一个二维数组，输出其所有笛卡尔积组合，例如：[['a', 'b'], ['c', 'd'], ['e']] => ['ace', 'ade', 'bce', 'bde']
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


