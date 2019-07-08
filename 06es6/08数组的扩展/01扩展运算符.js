/*扩展运算符spread(...) 是rest的逆运算,相当于把数组依次转变为用逗号隔开的单个元素*/
var a = [1, 2, 3, 4];
console.log(...a);//依次输出1,2,3,4，相当于console.log(1,2,3,4);
console.log(1, ...[2, 3, 4], 5);

/*用...参数名 代指多个参数，或者把一个数组拆分成多个元素当做参数*/
function push(arr, ...val) {
    arr.push(...val);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 7];
push(arr1, ...arr2);//把数据分解成单个元素当做参数
push(arr1, 8, 9, 10);//直接输入多个参数
console.log(...arr1);

/*可以替代apply的argument*/
function f(x, y, z) {
    console.log(x, y, z);
}

let b = [1, 2, 3];
f.apply(null, b);//传统用法
f(...b);//现在用法
