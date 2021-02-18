const co = require('co');

function* gen() {
  let a = yield 1;
  console.log(a);
  let b = yield 2;
  console.log(b);
};
co(gen)