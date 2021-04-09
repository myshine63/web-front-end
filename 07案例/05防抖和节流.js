// 防抖:事件触发后，会等待一段时间再执行。如果在等待时间内，事件再次触发，则从新计时
function debounce(fn, wait) {
  let timer = null;
  return function () {
    // 先清除掉原来的定时器
    clearInterval(timer);
    // 创建一个新的定时器，去执行函数
    timer = setTimeout(fn, wait);
  }
}

// 节流:在一段时间内，事件不停触发，则可以在这段时间内，让事件每隔一定时间执行一次
function throttle(fn, wait) {
  let canNewTimer = true;
  return function () {
    if (canNewTimer) {
      canNewTimer = false;
      // 创建一个新的定时器，去执行函数
      setTimeout(async () => {
        try {
          await fn();
          canNewTimer = true;
        } catch (e) {
          canNewTimer = true;
        }
      }, wait);
    }
  }
}

