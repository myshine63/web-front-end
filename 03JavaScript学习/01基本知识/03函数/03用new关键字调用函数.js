// 构建函数
function F(name) {
  this.name = name;
  return name;//如果没有return时，直接执行，那么b=undefined
}

// new关键字会创建一个对象，然后将函数内部的this指向该对象
let a = new F('tom');//通过new执行，则返回对象a:{name:'tom'}
console.log(a);//tom
// 由于直接执行，那么环境变量为顶层对象，浏览器为window,node中为global,global.name='jerry';
let b = F('jerry');
console.log(b);//jerry
console.log(global.name);//jerry

function Test() {
  this.name = "tom";
  return {}
}
let c = new Test();
console.log(c); //{}
console.log(Test())//{}
