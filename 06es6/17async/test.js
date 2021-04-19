function run(genF) {
  return new Promise((resolve, reject) => {
    let gen = genF();

    function dispatch(fn) {
      let next;
      try {
        next = fn();
      } catch (err) {
        return reject(err)
      }
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(data => {
        dispatch(function () {
          return gen.next(data)
        })
      }, err => {
        dispatch(function () {
          return gen.throw(err)
        })
      })
    }

    dispatch(function () {
      return gen.next()
    })
  })
}