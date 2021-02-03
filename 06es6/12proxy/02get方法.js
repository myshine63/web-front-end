/*get方法时用来拦截属性读取操作*/
let obj = {name: 'tom'};
let proxy = new Proxy(obj, {
  get: function (target, prop) {
    if (prop in target) {
      return target[prop];
    } else
      throw new Error('属性不存在');
  }
});
console.log(proxy.name);
// console.log(proxy.age);

/*get方法用来读取负数数组*/
let arr = [1, 2, 3, 4];
let obj1 = new Proxy(arr, {
  get(target, key) {
    let x = Number(key);
    if (x < 0) {
      x += target.length;
    }
    return target[key];
  }
});
console.log(obj1[-2]);

/*一个属性不可配置（configurable）和不可写（writable），则该属性不能被代理，通过 Proxy 对象访问该属性会报错。*/
