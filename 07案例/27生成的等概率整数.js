function production(min, max) {
  let res = {};
  for (i = 0; i < 100000000; i++) {
    let num = parseInt(Math.random() * (max - min) + min);
    if (!res[num]) {
      res[num] = 1
    } else {
      res[num]++
    }
  }
  console.log(res)
}
production(1,4);
