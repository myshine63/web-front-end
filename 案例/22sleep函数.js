// 使用while实现，这个方法的问题是会阻塞代码执行
function sleep1(fn, ms) {
  let start = Date.now();
  while (Date.now() - start < ms) {
  }
  fn();
}

// promise实现
function sleep2(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

sleep2(1000).then(() => {
  console.log('hello tom')
})