// 在进行乘法运算前，会将相乘的变量进行Number（）进行转换
console.log("123"*"10");//1230
console.log("123"*"");//0
console.log("123"*"0");//0
console.log("123"*null);//0
console.log("123"*true);//123
console.log("123"*false);//123
console.log("123"*false);//123
console.log("123"*"0x1");//123
console.log("123"*"0b1");//123
console.log("123"*"null");//NaN
