function run(fn) {
  return new Promise((resolve, reject) => {
    reject(123);
    console.log('aaaa')
    resolve(456)
  })
}

let a = run();
a.then(data => {
  console.log(data)
}, err => {
  console.log(err)
})