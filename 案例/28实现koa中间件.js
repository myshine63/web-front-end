let compose = middlewares => ctx => {
  function dispatch(i) {
    let fn = middlewares[i];
    if (!fn) {
      return Promise.resolve()
    }
    return Promise.resolve(fn(ctx, async function () {
      return dispatch(i + 1)
    }))
  }

  dispatch(0)
}
