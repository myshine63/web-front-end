let arr = [1, 2, 3424, 2, 52, 4, 224];
//实现排序
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
//实现乱序
arr.sort(function () {
  return Math.random() > 0.5 ? 1 : -1;
});
console.log(arr);
