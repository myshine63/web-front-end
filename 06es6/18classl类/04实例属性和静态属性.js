class Person {
  constructor(age) {
    this.age = age;//需要参数的实例属性
  }
}

let tom = new Person(14);
Person.male = 'male';//静态属性
console.log(tom.male, tom.age);
