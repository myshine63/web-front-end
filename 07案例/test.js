Function.prototype.myBind = function (context, ...args) {
  const self = this
  return function () {
    self.apply(context, [...args, ...arguments])
  }
}

function add(a, b, c) {
  console.log(a + b + c);
}

let add1 = add.myBind(null, 1, 2);
add1(5, 10)