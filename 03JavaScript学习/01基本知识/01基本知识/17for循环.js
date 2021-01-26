let arr = [3, 6, 9]
for (let val in arr) {
  console.log(val) // 0,1,2
}
for (let val of arr) {
  console.log(val) //3,6,9
}
let obj = {name: 'tom', age: 14};
for (let val in obj) {
  console.log(val) // name,age
}
