let proxy = new Proxy({}, {
  get(target,key) {
    console.log(`get value: key is ${key}`)
    return target[key]
  },
  set(target, key, val) {
    console.log(`set value: key is ${key} value is ${val}`)
    target[key] = val
  }
})

proxy.name = 0;
proxy.name++;
