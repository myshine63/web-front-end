function _new(fn, ...args) {
  if (typeof fn !== 'function') {
    throw Error('fn不是函数')
  }
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}

function Person(name){
  this.name = name
}

let a = _new(Person,'tom');
console.log(a)
console.log(a instanceof Person)