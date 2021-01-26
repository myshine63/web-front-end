function f(...a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i]
  }
  return sum
}

console.log(f(1, 2, 3))