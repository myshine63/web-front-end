// await 后面的函数抛出错误，等同于async函数返回的promise对象reject了
async function f() {
  await Promise.resolve(1);
  await Promise.reject(2);
}

// f().then(data => {
//   console.log(data)
// }).catch(e => {
//   console.log(e)
// }) // 2

async function f3() {
  await Promise.reject(1); // 当有一个promise reject后，后面的就不会执行
  await Promise.resolve(2);
}

// 给每个await后面的方法一个错误处理方法，避免一个错误导致全都停止

async function f1() {
  await Promise.reject(1).catch(e => {
    console.log(e)
  });
  await Promise.resolve(2).catch(e => {
    console.log(e)
  });
}

// f1(); // 打印 1,2

// 如果希望async返回的promise不是reject的.可以使用try catch

async function f2() {
  try {
    await Promise.reject(1);
    // 下面不会执行
    await Promise.resolve(2).then(data => {
      console.log(data);
    });
  } catch (e) {
    console.log(e)
  }
  return 3
}

f2().then((data) => {
  console.log(data)
}).catch((e) => {
  console.log(12333)
  console.log(e)
})
