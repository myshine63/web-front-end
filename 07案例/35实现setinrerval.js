let obj = {}

function MyInterval(fn, time) {
  setTimeout(() => {
    fn();
    if (obj) {
      MyInterval(fn, time)
    }
  }, time)
}

let a = MyInterval(() => {
  console.log(123)
}, 1000)
setTimeout(()=>{
  obj = null;
},5000)