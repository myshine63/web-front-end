function F(name) {
  this.name = name;
}

//所有函数都是Function的实例
console.log(F instanceof Function);//true

//所有的函数名都是一个对象
console.log(F instanceof Object);//true

//函数名也是一个变量，可以赋值给别的变量
let func = F;

//函数名也是一个类，可以用来创建对象
let obj = new F('tom');

//直接输出函数名，将输出函数代码
console.log(F);

//如果函数没有指定为某个对象的方法，都可以通过window/global来调用

global.F('jerry');//通过window/global调用那么函数内部的this就指代window/global
console.log(global.name)//jerry
