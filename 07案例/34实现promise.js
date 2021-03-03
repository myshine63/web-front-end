class MyPromise {
  constructor(fn) {
    this.status = 'pending';
    this.value = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    fn(this.resolve, this.reject)
  }

  resolve(val) {
    if (this.status === 'pending') {
      this.status = 'resolved';
      this.value = val
      this.resolvedCallbacks.forEach(fn => {
        fn(this.value)
      })
    }
  }

  reject(val) {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.value = val;
      this.rejectedCallbacks.forEach(fn => {
        fn(this.value)
      })
    }
  }

  then(fulfillFn, rejectFn) {
    if (this.state === 'pending') {
      this.resolvedCallbacks.push(fulfillFn);
      this.rejectedCallbacks.push(rejectFn);
    }

    if (this.state === 'resolved') {
      fulfillFn(this.value);
    }

    if (this.state === 'rejected') {
      rejectFn(this.value);
    }
  }
}

let a = new Promise((resolve, reject) => {
  reject(123)
})
// a.then(val => {
//   console.log(val)
// }).then(val => {
//   console.log(val)
//   return 456
// }).then(val => {
//   console.log(val)
// })
a.catch(val => {
  console.log(val)
})
a.then(val => {
  console.log(val)
})
let b = a.then(val => {
  console.log(val)
  return 456
})
b.then(val => {
  console.log(val)
})
a.then(val => {
  console.log(val)
})
