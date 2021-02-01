//函数提升就是在同一个script标签中函数会提到script标签顶部优先执行。因此可以先调用在定义
test1();//调用函数
function test1() {//定义函数
  console.log('hello word');
}

//匿名函数只会把变量提前进行声明，但是函数不会提升
try {
  console.log(a);
  a();//调用a函数，将会发生错误，因为此时只是声明了a变量但是还没有定义函数
} catch (e) {
  console.log(e.message);
}
var a = function () {//定义匿名函数
  console.log("how are you")
};
a();//调用a函数
//在函数内定义的匿名函数，如果变量为全局变量，那么函数也是全局函数，
function test2() {
  b = function (name) {
    console.log(name);
  }
}

test2();//执行函数后，匿名函数生成
b("xiaoming");//执行全局函数
