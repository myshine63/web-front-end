// async函数中未捕获的错误，会让async函数返回的promise成rejected状态
async function f() {
  // throw  new Error('123'); // 这里抛出了错误，后面的代码也不会执行
  await Promise.resolve('successed');
  await Promise.reject('failed');// 这里抛出了错误，后序的代码将不再执行
  // Promise.reject('failed') // 前面没有加await的reject，不会影响下面代码执行
  console.log(123456)
  return 123
}

// 只打印 failed
// f().then(data => {
//   console.log(data)
// }).catch(e => {
//   console.log(e)
// })

// 给每个await后面的方法，添加一个错误处理方法，避免一个错误导致全都停止
// 这种方式return语句一定会执行

async function f1() {
  await Promise.reject('failed').catch(e => {
    console.log(e)
  });

  await Promise.resolve('success').then(e => {
    console.log(e)
  });

  return 123
}

// 打印 failed success 123
// f1().then(data => {
//   console.log(data)
// });

// 也可以通过try catch 去捕捉await抛出的错误

async function f2() {
  try {
    await Promise.reject('failed');
    // 下面不会执行
    await Promise.resolve('success').then(data => {
      console.log(data);
    });
  } catch (e) {
    console.log(e)
  }
  return 123
}

// 打印 failed 123
f2().then((data) => {
  console.log(data)
}).catch((e) => {
  console.log(e)
})
