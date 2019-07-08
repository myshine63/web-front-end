/*assign()方法可以将多个对象的可枚举属性合并，相同属性名的，最后加入的会覆盖前面的,
* 并且会返回合并后的对象,注意:合并后的对象和源对象依然是同一个对象,指向同一个地址;
* */
let a = {name: 'tom'};
let b = {name: 'cat', age: '12'};
let c = Object.assign(a, b);
console.log(a);
console.log(c);
console.log(a === c);

/*Object.assign()只是浅复制,对于源对象的某个属性是对象时,只是复制这个对象的引用*/
let d = {name: {a: 1}};
let e = Object.assign({}, d);
e.name.a = 2;//修改源对象的属性值
console.log(d.name.a);//目标对象也会跟着改变

/*如果只有一个参数，Object.assign会直接返回该参数。*/
let f = {a: 1};
let g = Object.assign(f);
console.log(f === g);//true

/*由于undefined和null无法转成对象，因此他们不能作为第一个参数，作为第二个参数时，会返回对象本身*/
let h = Object.assign({}, null, undefined);//返回对象本身
console.log("h:", h);
/*字符串和数组都是可枚举属性,注意覆盖*/
let i = Object.assign({}, [1, 2, 3, 4], 'tom');//0:'t',1:'o',2:'m',a:1
console.log("i:", i);
/*assign 拷贝时，只会拷贝自身属性，包括symbol属性，不会拷贝继承的属性和不可枚举属性*/
