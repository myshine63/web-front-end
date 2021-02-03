// 对象中一般"_"开头的属性为私有属性，不能被直接访问和赋值

let proxy = new Proxy({_name: "tom", _age: 10,}, {
  set(target, key, val) {
    if (key.startsWith('_'))
      throw Error("私有属性不可访问")
    else {
      target['_' + key] = val
    }
  },
  get(target, key) {
    if (key.startsWith('_'))
      throw Error("私有属性不可访问")
    else {
      return target['_' + key]
    }
  }
})

console.log(proxy);
proxy.name = 'jerry'
proxy.age = 21;
console.log(proxy)