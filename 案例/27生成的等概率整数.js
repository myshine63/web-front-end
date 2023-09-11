// 生成min-max的正整数，包括min,max
// Math.random的范围是[0,1)
function production(min, max) {
  let length = max - min + 1 // 生成整数的长度范围
  let num = Math.floor(Math.random() * length) // 生成等概率的整数范围
  return num + min
}

function testProduction(min, max) {
  let res = {};
  let num;
  for (i = 0; i < 100000000; i++) {
    num = production(min, max);//
    if (!res[num]) {
      res[num] = 1
    } else {
      res[num]++
    }
  }
  console.log(res)
}

testProduction(1, 4)
