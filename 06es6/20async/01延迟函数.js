// 实现一个延迟函数
function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function doSome() {
    await timeout(2000);
    console.log(123);
}

doSome();