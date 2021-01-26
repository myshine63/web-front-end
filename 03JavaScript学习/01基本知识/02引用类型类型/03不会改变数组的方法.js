let arr = [1, 2];
//contact返回追加后的数组
let contact = arr.concat(3, 4, [5, [6, 7]]);//结果为1,2,3,4,5,[6,7]说明连接参数为数组时，会挨个取出数组中的元素添加进去
let arr1 = arr.concat();//复制一个数组

//slice，返回截取的数组，类似于字符串的方法
arr.slice(0, 1);//1
let arr2 = arr.slice(0);//复制数组

//join，将数组用字符串连接起来，并返回字符串，当不给参数时默认为逗号
console.log(arr.join());//1,2
console.log(arr.join('#'));//1#2
//foreach(callBack),取出数组中每个元素并执行操作
arr.forEach((val) => {//依次输出每个值
  console.log(val);
});
//map(callBack),取出每个元素，执行一些操作，并返回一个回调函数返回值组成的数组
//如果回调函数没有返回值，将返回所有元素为undefined组成的数组
let arr3 = arr.map((val) => {
  val++;
});
console.log(arr3);//[undefined, undefined]
//filter(callBack).取出每个元素比如a,b,c，如果回调函数返回值为true,则返回[a,b,c],
//如果回调没有返回值，则返回空数组
let arr4 = arr.filter((val) => {
  if (val > 1)
    return true
});
console.log(arr4);//2
