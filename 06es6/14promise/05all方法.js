//Promise.all()用于将多个promise实例封装成一个promise对象，接受一个元素为promise对象实例的数组作为参数
//当所有promise状态都为成功，则会将每个promise实例的返回结果组成数组作为参数传给then方法。
//如果某个promise实例状态失败，则会捕捉第一个失败的promise抛出的错误
let a = new Promise((resolve) => {
    resolve(1);
});

let b = new Promise((resolve) => {
    resolve(1);
});

Promise.all([a, b]).then(res => {
    // 根据a，b的结果执行操作
    console.log(res[0] + res[1])
});
