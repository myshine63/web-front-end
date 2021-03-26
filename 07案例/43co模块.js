function spawn(genFunc) {
  return new Promise((resolve, reject) => {
    const gen = genFunc();

    function run(nextFn) {
      let next;
      try {
        next = nextFn;
      } catch (e) {
        reject(e)
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function (v) {
        run(function () {
          return gen.next(v);
        });
      }, function (e) {
        run(function () {
          return gen.throw(e);
        });
      });
    }

    run(function () {
      return gen.next(undefined);
    });
  })
}