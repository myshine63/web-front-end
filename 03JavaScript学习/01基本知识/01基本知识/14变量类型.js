// js中变量类型有两种。
// 1.基本类型:string,number,boolean,symbol,undefined,null,
// 2.引用类型:array,function,object
let a = "hello tom", b = 123, c = false, d = Symbol('123'), e, f = null;
let g = [], h = {}
let i = () => {
}
console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // boolean
console.log(typeof d); // symbol
console.log(typeof e); // undefined
console.log(typeof f); // object
console.log(typeof g); // object
console.log(typeof h); // object
console.log(typeof i); // function
console.log(g instanceof Array)