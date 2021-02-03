/*set属性可以按照自己的需求给属性赋值*/
let obj = {};
let proxy = new Proxy(obj, {
  // 设置年龄只能不能为负数
  set(target, key, val) {
    if (key === 'age') {
      if (val < 0)
        throw Error("年龄不能为负数")
      else {
        target.age = val
      }
    }
  }
});
proxy.age = 15;
console.log(proxy.age)
proxy.age = -2 // 抛出错误
