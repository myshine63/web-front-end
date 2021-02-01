//在函数内部定义的函数，他只能在外函数被调用后，内部函数才生成
function outer() {
  function inner1() {
    document.write("执行内部函数1");
  }

  function inner2() {
    document.write("执行内部函数2");
  }

  //执行内部函数
  inner1();
  inner2();
}

outer();//调用外部函数
