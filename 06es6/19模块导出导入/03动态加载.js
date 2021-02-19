// 动态加载是在编译的时候才加载模块，加载是会把模块加载成一个对象，因此可以通过结构赋值去获取
// 默认导出要更改名字
import('./01导出.mjs').then(({a, b, c, d, e, default: de}) => {
  console.log(a, b, c, e);
  d(1, 2);
  de()
})