/**
 * 传入函数a，返回一个函数b。函数b能执行一次，并且会保存结果。以后再执行函数b即使参数改变，结果依然不变
 * @param func 传入的函数。
 * @returns {Function} 封装后的函数
 */
function once(func) {
  let flag = true;
  let self = this;
  let res;
  return function (...args) {
    if (flag) {
      res = func.apply(self, args);
      flag = false
    }
    return res
  }
}

function logName(name) {
  console.log('hello ' + name);
  return name
}

let newFunc = once(logName);
console.log(newFunc('tom'));
console.log(newFunc('jerry'));
