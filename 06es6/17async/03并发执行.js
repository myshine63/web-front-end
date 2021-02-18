function sleep(val, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(val)
      resolve(val);
    }, time)
  })
}

// 顺序执行，
async function f() {
  let a = await sleep(1, 5000);
  let b = await sleep(2, 5000);
  console.log(a, b) // 会在10秒后打印
}

// f()
// 同步执行
async function f1() {
  let [a, b] = await Promise.all([sleep(1, 5000), sleep(2, 5000)])
  console.log(a, b);// 5秒后执行
}
// f1()
// 同步执行
async function f2(){
  let pro1 = sleep(1,5000);
  let pro2 = sleep(2,5000);
  let a = await pro1;
  let b = await pro2;
  console.log(a,b)
}
f2();
