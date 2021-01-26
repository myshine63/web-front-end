let arr = [1, 2, 3];
//reverse，翻转数组，并返回改变后的原数组
let a = arr.reverse();
console.log(arr === a);//true
console.log(arr);//[3,2,1]
arr.sort((a, b) => a - b)
console.log(arr)

//sort排序，会出现15排在2前面的情况，不知道怎么解决，先放着
