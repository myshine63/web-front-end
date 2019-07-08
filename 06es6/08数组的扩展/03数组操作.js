let arr1 = [1, 2, 3, 4];
let arr2 = arr1;//此时arr2和arr1都指向同一个数组，因此当其中一个改变时另一个也改变
arr1.push(5);
arr2.push(6);
console.log(...arr1);//1,2,3,4,5,6
console.log(...arr2);//1,2,3,4,5,6

/*传统方发复制*/
let arr = arr1.concat();//在arr1后面加一个空数组，生成一个新数组
console.log(arr);
/*通过扩展运算符来复制数组*/
let arr3 = [1, 2, 3, 4];
let arr4 = [...arr3];//复制数组
let [...arr5] = arr3;//复制数组，相当于解构赋值
arr3.push(5);
arr4.push(6);
console.log(arr3);
console.log(arr4);

/*合并数组*/
let arr6 = [1, 2, 3, 4];
let arr7 = [5, 6, 7, 8];
let arr8 = [...arr5, ...arr6];//相当于 arr7=arr5.concat(arr6);
