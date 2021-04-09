function MyNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, args);
  return res instanceof Object ? res : obj
}