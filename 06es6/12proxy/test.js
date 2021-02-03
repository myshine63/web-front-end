let proxy = new Proxy({}, {
  get(target) {
    return "hello " + target.name
  },
  set(target, name, val) {
    target.name = val
  }
})

proxy.name = 'tom'
console.log(proxy.name)
proxy.name = 'jerry'
console.log(proxy.name)
