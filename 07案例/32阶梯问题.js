// 一个人上阶梯，一次只能上一梯或者2梯，那么他上n梯有多少种方法

function f(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  if (n > 2) {
    return 2 * f(n - 2)
  }
}

console.log(f(6))