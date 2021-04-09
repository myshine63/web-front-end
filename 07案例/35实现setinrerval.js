function MyInterval(fn, time) {
  let flag = {
    canRun: true
  }

  function createTimer() {
    setTimeout(() => {
      if (flag.canRun) {
        fn();
        createTimer()
      }
    }, time)
  }

  createTimer()
  return flag
}

function clearMyInterval(timer) {
  timer.canRun = false
}

let timer = MyInterval(() => {
  console.log(123)
}, 1000)

setTimeout(() => {
  clearMyInterval(timer)
}, 5500)