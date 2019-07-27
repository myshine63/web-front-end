// 当一个操作不知道是异步还是同步操作时。如果是同步正正常执行，如果是异步则用promise封装
function f() {
    console.log("tom")
}

//方法一，用async
(async ()=>{
    f()
})();
console.log(11111);

//方法二
new Promise(resolve => {
    resolve(f())
});

console.log(22222);

//方法三
// Promise.try(f);