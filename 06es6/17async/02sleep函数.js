// 等待函数
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

sleep(3000).then(() => {
  console.log('hello tom')
})