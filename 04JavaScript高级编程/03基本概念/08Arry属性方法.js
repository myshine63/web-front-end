let a = [1, 2, 3];
a.length -= 1;
console.log(a);
a.length += 1; // 不可以恢复
console.log(a);

//arr.from(item)；方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例;
let b = Array.from("hello tom");
console.log(b);// [ 'h', 'e', 'l', 'l', 'o', ' ', 't', 'o', 'm' ]
// 让你可以在最后生成的数组上再执行一次 map 方法
let c = Array.from("1011", function (a) {
    return Number(a);
});
console.log(c); //[ 1, 0, 1, 1 ]
// 当参数为对象时，返回空数组
let d = Array.from({name: "tom", id: 15});
console.log(d);//[]
console.log(Array.from([1, 2, 3])); //[ 1, 2, 3 ] 相当于复制一个数组
// 将参数作为数组元素
let e = Array.of("7", 123, undefined, true, [123, 456]);
console.log(e);

