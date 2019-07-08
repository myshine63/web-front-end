/*为对象添加属性和方法*/
let obj = {};
Object.assign(obj, {name: 'tom', age: 30}, {
    getProp() {
        console.log(this.name, this.age)
    }
});
console.log(obj.name, obj.age);
obj.getProp();

/*给类的原型增加方法*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let per = new Person('tom', 25);
//相当于Person.prototype.getProp=function(){...};

Object.assign(Person.prototype, {
    getProp() {
        console.log(this.name, this.age)
    }
});
per.getProp();
console.log(Person.prototype);
