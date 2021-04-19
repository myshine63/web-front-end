// async方式
async function asyncFn(a, b) {
  let m = await Promise.resolve(a);
  let n = await Promise.resolve(b);
  console.log(a, b);
  return {m, n}
}

asyncFn(1, 2).then(data => {
  console.log(data);
})

// generator函数自动执行的co函数
function run(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();

    function dispatch(fn) {
      let next;
      try {
        next = fn();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function (v) {
        dispatch(function () {
          return gen.next(v);
        });
      }, function (e) {
        dispatch(function () {
          return gen.throw(e);
        });
      });
    }

    dispatch(function () {
      return gen.next(undefined);
    });
  });
}

function genFn(a, b) {
  function* genF() {
    let m = yield Promise.resolve(a);
    let n = yield Promise.resolve(b);
    console.log(m, n);
    return {m, n}
  }

  return run(genF);
}

genFn(1, 2).then(data => {
  console.log(data);
})
