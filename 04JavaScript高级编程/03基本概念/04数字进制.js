let a = 123;
console.log(parseInt(123));//123
console.log(parseInt("0b10"));//0
console.log(parseInt("0o10"));//0
console.log(parseInt("0x10"));//16
console.log(parseInt("010"));//10
console.log(parseInt("123"));//123
console.log(parseInt("123.00"));//123
console.log(parseInt("123.5"));//123
console.log(parseInt("123x"));//123
console.log(parseInt(""));//NaN
console.log(parseInt(null));//NaN
console.log(parseInt("x123"));//NaN
console.log(parseInt("aaa"));//NaN
console.log(parseInt("null"));//NaN
console.log(parseInt(undefined));//NaN
console.log(parseInt("undefined"));//NaN
console.log("**********************");
// radix,对截取到的数字采用那种进制。因此截取到的能够转成数字再执行转换成10进制
console.log(parseInt(123, 2));//123
console.log(parseInt("010", 2));//10
console.log(parseInt("123",8));//83