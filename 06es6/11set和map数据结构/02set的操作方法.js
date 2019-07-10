/*add()添加数据,注意如果直接用add添加对象和数组那么不能够用has和delete方法去操作这个对象或数组
* 因为判断对象相等时利用地址去判断,而两个对象和数组即使一模一样他们的地址也是不等的
* 即[]!==[],{}!=={}*/
let set = new Set();
let arr = [1, 2, 3];
let obj = {name: "tom"};
set.add(1);
set.add(1);
set.add(arr);
set.add(arr);
set.add(true);
set.add(true);
set.add(obj);
set.add(obj);
set.add(undefined);
set.add(undefined);
console.log(set);
/*has()判断是否有某个值，返回值为boolean*/
console.log(set.has(obj));
console.log(set.has(arr));
console.log(set.has(undefined));
console.log(set.has(true));

/*delete()删除某个值，返回值为Boolean*/


/*清空set数据结构*/
set.clear();//没有返回值
console.log(set);

