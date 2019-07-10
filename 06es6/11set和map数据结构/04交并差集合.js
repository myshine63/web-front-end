/*Array.filter(callback(value[,index,arr])),
* 说明,依次传入数组中值给回调函数,当返回值是true是保留value,false不保留,返回一个筛选过后的
* 新数组,不会改变原数组*/
let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = arr.filter(x => x > 4);
console.log(newArr);//[5,6,7];

/*并集*/
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let a = new Set([...arr1, ...arr2]);

/*交集*/
let b = arr1.filter((x) => {
    return (new Set(arr2)).has(x);
});

/*差集*/
let c = arr1.filter((x) => {
    return !(new Set(arr2)).has(x);
});
console.log(a);
console.log(b);
console.log(c);
