/*特点和性质和数组一样,注意后面2中的区别*/
function f({x, y}) {
    console.log(x, y);
}

function f1({x = 0, y = 0}) {
    console.log(x, y);
}

function f2({x, y} = {x: 0, y: 0}) {//该方法可以不要传入参数
    console.log(x, y);
}
