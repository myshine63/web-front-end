function power(x, n) {
  if (n === 0) {
    return 1
  }
  let y = power(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return y * y
  } else {
    return y * y * x;
  }
}

console.log(power(2, 9))
