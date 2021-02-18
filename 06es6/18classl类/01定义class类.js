 // 1. 类本质也是函数，但是不可以直接调用，必须使用new字符
 // 2. 类不存在变量提升，因此不可以先使用在定义
 // 3. 类内部定义的方法都是定义在prototype上
 // 4. 类定义的所有方法都是不可枚举
class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getPoint() {
    return {x: this.x, y: this.y};
  }
}

let point1 = new point(1, 2);
console.log(point1.getPoint());

//定义匿名类
let a = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log('name:' + this.name, 'age:' + this.age);
  }
};
let b = new a('tom', 15);
b.say();
/*类的本质是函数*/
console.log(typeof point);//function
