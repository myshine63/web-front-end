/*then方法返回的是一个新的Promise对象*/
let promise = new Promise((resolve, reject) => {
    resolve(1);
});
/*1.当then方法中有return时,默认执行resolve(返回值)*/
let a = promise.then(x => {
    console.log(x);//1
    return x;
});
/*then方法不含有return,默认执行resolve()*/
a.then((value) => {
    console.log(value)
}).then((value) => {
    console.log(value)
});