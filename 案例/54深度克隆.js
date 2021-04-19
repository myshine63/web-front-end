function cloneDeep(obj) {
  if (typeof obj === 'function' || !(obj instanceof Object)) {
    return obj
  } else {
    let res;
    res = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        res[key] = cloneDeep(obj[key])
      }
    }
    return res
  }
}

let a = {
  name: {
    age: 14
  },
  set age(val) {
    this._age = val + 1
  },
  get age() {
    return this._age
  }
}
let b = cloneDeep(a);
b.name.age = 15;
console.log(a);
console.log(b)
