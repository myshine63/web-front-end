// 函数a作为参数传递给函数b，在函数b内部调用。则a叫做回调函数
function callBack() {
  console.log("我是callBack，我作为参数给其他函数使用.")
}

function f(callBack) {
  console.log("我是主函数b.");
  callBack && callBack();//执行回调函数，这里调用了
}

f(callBack);
