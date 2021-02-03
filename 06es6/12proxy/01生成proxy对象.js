// new Proxy(target,handler), 生成一个proxy对象
let obj = {
  age: 0
}
let proxy = new Proxy(obj, {
  set(target, key, val) {
    target[key] = val + 1
  },
  get(target, key) {
    return target[key]
  }
})
// 对obj的操作不会受到handler的影响，但是proxy会发生改变
obj.age = 10;
console.log(obj.age) // 10
console.log(proxy.age) // 10
// 对proxy的操作会受到handler的影响，并且obj也会发生相同改变
proxy.age = 20;
console.log(obj.age) // 21
console.log(proxy.age) // 21