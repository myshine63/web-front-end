async function fn(args) {
  // ...
}

// 等同于

function fn1(args) {
  return spawn(function* () {
    // ...
    yield 123
  });
}

function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();

    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function (v) {
        step(function () {
          return gen.next(v);
        });
      }, function (e) {
        step(function () {
          return gen.throw(e);
        });
      });
    }

    step(function () {
      return gen.next(undefined);
    });
  });
}

function* f() {
  let a = yield Promise.resolve(1);
  let b = yield Promise.resolve(2);
  console.log(a, b);
  return 3
}
