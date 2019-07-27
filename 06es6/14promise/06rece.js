//用于将多个promise实例封装成一个promise对象，接受一个元素为promise对象实例的数组作为参数
//当某个promise实例状态变成成功，则会将将当前promise实例的返回结果作为参数传给then方法。
let a = new Promise((resolve) => {
    resolve(1);
});

let b = new Promise((resolve) => {
    resolve(2);
});

Promise.race([a, b]).then(res => {
    // 根据a，b的结果执行操作
    console.log(res)
});
