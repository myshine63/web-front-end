/*set是类似于数组的解构,他类似于对象，但是并不是数组，并且里面的值是不重复的*/
let a = new Set([1, 1, 2]);
console.log(a);
let b = [...a];//生成新数组
console.log(a instanceof Array);//false
console.log(b instanceof Array);//true

/*利用set数据结构去除数组中的重复项*/
let c = [1, 1, 1, 2, 2, 3, 4, 5];
let d = [...new Set(c)];//去除重复元素后的数组
console.log(d);

/*set数据通过add()方法添加数据，并且在set数据结构中NaN=NaN*/
let e = new Set();
e.add(NaN);
e.add(NaN);
console.log(e);

/*set数据结构中，两个空对象并不相等，即{}!={}*/
e.add({});
e.add({});
console.log(e);

/*通过Array.form()方法将set数据结构转换成数组*/
let f = Array.from(e);
console.log(f);