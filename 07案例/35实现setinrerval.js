function MyInterval(fn, time) {
  setTimeout(() => {
    fn();
    MyInterval(fn, time)
  }, time)
}

let a = MyInterval(() => {
  console.log(123)
}, 1000)
