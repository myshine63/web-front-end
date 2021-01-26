function foo(arr1, arr2) {
  let intersection = [], union = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
        break;
      }
      if (j === arr2.length - 1) {
        union.push(arr1[i]);
      }
    }
  }
  union = union.concat(arr2);
  return {intersection, union};
}

var a = [1, 2, 3, 4];
var b = [3, 4, 5, 6];
console.log(foo(a, b).intersection);//交集
console.log(foo(a, b).union);//并集
