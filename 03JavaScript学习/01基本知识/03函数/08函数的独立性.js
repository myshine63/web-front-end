//函数即使附加给了某个具体的对象，也可以通过apply或者call方法调用
function Person(name) {
  this.name = name;
  this.info = function () {
    console.log(this.name);
  }
}

var a = new Person("bob");//创建对象
var name = "tom";///定义一个全局变量
a.info();//调用a对象的info方法,因此输出bob
a.info.call(window);//调用info方法，但是调用者变成了window，因此输出全局变量tom
