var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let arr1 = arr.flat(Infinity);
console.log(arr1)
let set = new Set(arr1);
let res = Array.from(set);
console.log(res)