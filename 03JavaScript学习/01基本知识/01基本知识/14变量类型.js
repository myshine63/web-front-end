// js中变量类型有两种。
// 1.基本类型:string,number,boolean,symbol,undefined,null,
// 2.引用类型:array,function,object

let f = () => {
}
console.log(typeof "hello tom"); // string
console.log(typeof 123); // number
console.log(typeof false); // boolean
console.log(typeof Symbol('123')); // symbol
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof f); // function

console.log("hello tom" instanceof Object); // false
console.log(123 instanceof Object);// false
console.log(false instanceof Object);// false
console.log(Symbol('123') instanceof Object);// false
console.log(undefined instanceof Object);// false
console.log(null instanceof Object);// false
console.log([] instanceof Object); // true
console.log({} instanceof Object);// true
console.log(f instanceof Object);// true


