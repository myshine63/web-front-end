let a = 10;
let obj = {
  a,

  hello() {
    console.log('hello')
  },
  jerry: function () {
    console.log('jerry')
  },
  set test(test) {
    this.age =test
  },
  get test() {
    return this.age
  }
}
console.log(obj.test)
obj.test = 'spike'
console.log(obj.test)