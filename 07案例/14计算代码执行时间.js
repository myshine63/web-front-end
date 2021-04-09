// 只能计算出同步任务的执行时间。
console.time();
setTimeout(function () {
    console.log("hello tom")
}, 5000);

function fib(value) {
    if (value === 1 || value === 2) {
        return value
    }
    return fib(value - 1) + fib(value - 2)
}
console.log(fib(10));
console.timeEnd();