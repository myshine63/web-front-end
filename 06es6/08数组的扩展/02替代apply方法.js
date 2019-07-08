/*代替apply方法。函数名.apply(调用者,参数数组)，因此当函数的参数为n个，又需要把长度为n的数组的元素
* 依次传入作为参数时，可以用apply方法或者直接用哦扩展运算符*/

/*案例一*/
function f(x, y, z) {
    return x + y + z;
}

let arr = [1, 2, 3];
f.apply(null, arr);//apply 方法
f(...arr);//扩展方法

/*案例二，push方法一次只能传入一个数据*/
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
Array.prototype.push.apply(arr1, arr2);
arr1.push(...arr2);
console.log(arr1);
