// 1. async是generator函数的语法糖，内置了co模块
// 2. await后面的函数可以返回promise或者原始值，undefined
// 3. 调用async总会返回一个promise
// 4. let a = await Promise.resolve(val); a不是一个promise,a === val
async function f() {
  console.log(1);
  await console.log(2)
  await f1();
  console.log(4);
}

let a = f();
console.log(5);
a.then(() => {
  console.log(6)
})

function f1() {
  console.log(3)
}

// 输出 1,2,5,3,4,6