let a = () => console.log('a')
let b = () => console.log('b')
let c = () => console.log('c')

async function f1() {
    console.log('f1')
    await a();
    // 断点，后面是微任务
    await b();
    await c();
}

let d = () => console.log('d')
let e = () => console.log('e')
let f = () => console.log('f')

console.log('start')

new Promise(resolve => {
    console.log('promise')
    resolve()
}).then(d).then(e).then(f)

console.log('aaaaa')

f1()

console.log('ddddd')
// start promise aaaaa f1 a ddddd d b e c f
