//创建promise对象时可以传入一个回调函数。
//回调函数有2个参数。第一个参数是执行成功的函数，第二个执行是失败的函数
//创建promise对象同步任务，会立刻执行。
//then方法为异步任务
//promise一旦执行，它的状态就不会发生改变,
//reject(new Error(....))等同于throw new Error(....);
//在resolve和reject后面再抛出错误是无效的
var a = 10;
let promise = new Promise((resolve, reject) => {
    console.log(1, a);//立刻执行输出1,10
    if (a === 10) {
        a++;
        resolve(a);
        throw new Error("11111111111111")// 无效的
    } else {
        reject('error');
    }
});
console.log(2, a);//第二个输出，11
promise.then(val => {
    console.log(3, val);//最后输出3,11
}, val => {
    console.log(val)
});
a++;
promise.then(val => {
    console.log(3, val);//依然输出3,11；
}, val => {
    console.log(val)
}).catch(x => {
    console.log(x)
});
console.log(4, a);//第3个输出，3
