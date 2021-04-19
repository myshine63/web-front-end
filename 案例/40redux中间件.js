// 中间件
const logMiddleware = store => next => action => {
  console.log(action);
  console.log(store.getState());
  next(action);
  console.log(store.getState());
}

// 应用中间件
function applyMiddleware(store, ...middlewares) {
  let dispatch = store.dispatch();
  for (let i = middlewares.length - 1; i >= 0; i--) {
    let middleware = middlewares[i];
    dispatch = middleware(store)(dispatch);
  }
  return {...store, dispatch}
}

