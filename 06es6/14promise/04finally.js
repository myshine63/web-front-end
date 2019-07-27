// finally 方法为一定执行，且不带有参数
new Promise((resolve) => {
    resolve(123);
}).then((x) => {
    console.log(x);
    throw new Error("发生了错误")
}).catch((x) => {
    console.log(x.message)
}).finally(() => {
    console.log("执行完毕")
});