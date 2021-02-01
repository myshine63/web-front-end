//所谓鸭子类型，就是函数在处理参数时，应当对参数进行判断，看参数是否符合要求
function f1(a, b) {
  if (typeof a === "number") {
    console.log(a);
  } else
    console.log("传入的参数不是数字");
  if (typeof b === "string")
    console.log(b);
  else
    console.log("传入的参数不是字符串");
}

f1(15, 20);
