//1.创建数组的方法,数组的元素可以为不同类型，并且值可以为undefined和null
//2.访问数组是不会发生越界，取不到值时，为undefined。
var a = [];//创建一个长度为0的数组
var b = new Array(4);//创建一个长度为4的数组或者new Array(1,2,3,'4',true);
var c = [1, true, null, "hello", undefined];//创建一个不同数据类型的数组，长度为5
//判断是否为数组的方法
if (a instanceof Array) {//判断是否为数组
  console.log("yes");
}
if (Array.isArray(a)) {//判断是否为数组的另一种方法
  console.log("yes");
}