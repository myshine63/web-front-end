// 可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
// 创建promise对象时可以传入一个回调函数
// 回调函数有2个参数。第一个参数是执行成功的函数，第二个执行是失败的函数
// 创建promise对象是同步任务，会立刻执行。
// then方法为异步任务
// promise一旦执行，它的状态就不会发生改变。
// 在resolve和reject后面再抛出错误是无效的
// 调用resolve或reject并不会终结 Promise 的参数函数的执行
var a = 0;
let promise = new Promise((resolve, reject) => {
    console.log(1, a);//立刻执行输出1,10
    try {
        resolve(a);
        a++;
        console.log('a++', a);
        throw new Error('err');
    } catch (e) {
        reject(e); // 这里不会再执行
        console.log(e.message);
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

// 如果promise返回了一个promise,那么第二个promise的状态将由第一个promise状态决定

function f() {
    let a = new Promise((resolve, reject) => {
        setTimeout(reject, 100, Error('123'))
    })
    let b = new Promise(resolve => {
        resolve(a)
    })
    a.then(res => {
        console.log('a',a)
    }, (e) => {
        console.log('err,aa',a)
        console.log('a,err', e.message)
    })
    b.then(res => {
        console.log('b', res)
    }, (e) => {
        console.log(b,'111111')
        console.log('b,err', e.message)
    })


}

f();

let c = new Promise(resolve => {
    setTimeout(() => {
        resolve(Error('123'))
    }, 1000);
})
c.then(() => {
    console.log('fulfilled')
}, () => {
    console.log('rejected')
})