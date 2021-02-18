// 继承必须调用super()方法,调用super方法后才能使用this关键字
class A {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`hello ${this.name}`);
  }
}

class B extends A {
  constructor(name, age) {
    super(name); // 调用父类的构造方法
    this.age = age;
  }

  logAge() {
    console.log(this.age)
  }
}

let b = new B('tom', 24)
b.say();
b.logAge()
