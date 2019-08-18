//如果其中一个变量为字符串，则把所有变量拼成一个字符串
//如果变量都不是字符串，则把他们进行Number（）转换后相加
console.log(2 + "true");//2true
console.log(2 + true);//3
console.log(2 + null);//2
console.log(2 + "0b11");//20b11