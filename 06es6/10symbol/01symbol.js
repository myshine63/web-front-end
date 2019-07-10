/*
* symbol是一个唯一的变量，他用来做属性的名字，用来保证属性名不会重复，
* 因为它是变量，因此在属性内部定义时只能使用 [变量名]的方式.
* 外注意区分,用变量名做属性名,用变量值做属性值
* */
let a = Symbol();
let b = Symbol();
let c = Symbol("abc");
let d = Symbol("abc");
let obj = {
    [a]: "tom",
    [b]: "jerry",
    [c]: "dog"
};
console.log(a === b);// 两个Symbol不会相等
console.log(c === d);// 两个Symbol不会相等
console.log(obj);

/*symbol.toString(),可以获得该symbol变量的描述*/
let e = d.toString();
console.log(e);// "Symbol(abc)"

/*symbol变量不能和其他变量进行计算，但是他可以显式转换成字符串*/
// let str=Symbol()+'hello';会报错
let str = 'this is ' + e;
console.log(str);
