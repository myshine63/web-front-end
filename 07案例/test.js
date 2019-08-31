async function f() {
    let a = await f1();
    let b = await f2();
    console.log(a);
    console.log(b);
}

function f1() {
    return "123"
}

function f2() {
    setTimeout(function () {
        console.log(456);
    }, 1000)
}

let a = f();
console.log(a);
a.then(ss => {
    console.log(ss)
});
