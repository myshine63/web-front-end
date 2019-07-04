/*
1.es6中用var function定义的全局变量依然是window的属性，但是let const class定义的变量不是
2.浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。浏览器和 Web Worker 里面，self也指向顶层对象，
但是 Node 没有self。Node 里面，顶层对象是global，但其他环境都不支持。
*/
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1
this.a;//1
let b = 1;
window.b // undefined

//获取顶层对象的2中方法
var getGlobal = function () {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('unable to locate global object');
};
var c = (typeof window !== 'undefined'
    ? window
    : (typeof process === 'object' &&
        typeof require === 'function' &&
        typeof global === 'object')
        ? global
        : this);
