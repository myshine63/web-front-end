function Person(name, age) {
  this.age = age;//实例属性，属于某个具体的实例对象
  Person.name = name;//类属性，属于类。因为函数也是一个对象，也可以给他添加属性
}

var a = new Person("tom", 24);
console.log(a.age);//输出24
console.log(a.name);//对象没有name属性，输出undefined
console.log(Person.name);//输出类属性的name
