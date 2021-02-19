// es6的模块采用的是静态导出指定代码，然后在引入指定代码。是在编译是加载
// es6的模块采用的是严格模式
// export只能放在顶层，不能放在块作用域
export let a = 123;
export let b = {name: 'tom'};
let c = true;
let d = function (a, b) {
  console.log(a + b);
}
export {c, d, c as e}
export default function () {
  console.log('hello tom')
}
