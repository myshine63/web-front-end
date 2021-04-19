function f() {
    console.log(1)
}

setTimeout(function () {
    console.log(2)
}, 0);

async function f1() {
    console.log(3);
    await f();
    await setTimeout(function () {
        console.log(4)
    }, 0);
    await f();
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
// 5 6 7