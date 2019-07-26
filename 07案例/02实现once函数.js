/**
 * 传入函数a，返回一个函数b。函数b能执行一次，并且会保存结果。以后再执行函数b即使参数改变，结果依然不变
 * @param func 传入的函数。
 * @returns {Function} 封装后的函数
 */
const once = function (func) {
    let count = 0;
    let result;//用来返回传入函数直接的结果，如果传入的函数没有返回值，则result为空
    return function () {
        if (count === 0) {
            count++;
            result = func.apply(null, arguments);//调用传入的函数，并将结果保存在result中
            return result;
        } else
            return result;
    }
};

function f(name) {
    return name + 5;
}

let a = once(f);
console.log(a(1));
console.log(a(2));
console.log(a(3));
