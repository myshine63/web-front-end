let str = "hello ,汤姆";
let arr = [...str];
console.log(arr);//[ 'h', 'e', 'l', 'l', 'o', ' ', ',', '汤', '姆' ]
// 对于4字节的字符，js在处理时会当成2个字符看待，因此在获取中文字符长度时，用扩展运算可以正确获取

let a = "汤姆";
let b = "abc";
console.log(a.length);
console.log(b.length);