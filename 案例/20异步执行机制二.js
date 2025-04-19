// 同步任务 5 6 7 3 1
// 微 1
// 宏 2 4,4
// 5 6 7 3 1 8,9,1,10,1 2 4,4
function f() {
    console.log(1)
}

setTimeout(function () {
    console.log(2)
}, 0);

async function f1() {
    console.log(3);
   let a =  await f();
    // m1
    await setTimeout(function () {
        console.log(4)
    }, 0);
    // m2
    await f();
    //m3
    await setTimeout(function () {
        console.log(4)
    }, 0);
    await f();
}

console.log(5);
new Promise((resolve, reject) => {
    console.log(6);
    resolve();
    console.log(7)
}).then(function () {
    console.log(8)
}).then(function () {
    console.log(9)
}).then(function () {
    console.log(10)
});
f1();
// 同步任务 5 6 7 3 1
// 微 8
// 宏 2
