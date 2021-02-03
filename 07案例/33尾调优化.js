// 一个人上阶梯，一次只能上一梯或者2梯，那么他上n梯有多少种方法

function f(n, k1 = 1, k2 = 2) {
  if (n === 1) {
    return k1
  }
  if (n === 2) {
    return k2
  }
  if (n > 2) {
    return f(n - 2, 2 * k1, 2 * k2)
  }
}

// console.log(f(6))

function f2(n, total = 1) {
  if (n === 1) {
    return total
  }
  return f2(n - 1, n * total)
}

// console.log(f2(4));

function f3(n, prev = 1, count = 1) {
  if (n <= 1) {
    return count
  }
  return f3(n - 1, count, prev + count)
}

console.log(f3(1))
console.log(f3(2))
console.log(f3(3))
console.log(f3(4))
console.log(f3(5))