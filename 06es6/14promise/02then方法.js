// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
// 因此可以采用链式写法，即then方法后面再调用另一个then方法
let p = new Promise((resolve, reject) => {
    resolve(1);
});

let a = p.then(x => {
    console.log(x);//1
    return x + 1;
});
/*then方法不含有return,默认执行resolve()*/
a.then((value) => {
    console.log(value)
}).then((value) => {
    console.log(value)
});

