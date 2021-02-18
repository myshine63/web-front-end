// 类的静态方法是时定义在类上，不可以通过实例调用
// 静态方法中的this指的是类，而不是实例对象
class Person {
  constructor(age) {
    this.age = age;
  }

  a() {
    console.log(this.age);
  }

  static b() {
    console.log('hello');
  }

  static c() {
    this.b(); // 静态方法中的this指的是Person
  }
}

let p = new Person(14);
p.a();//14
Person.b();//hello
Person.c();//
