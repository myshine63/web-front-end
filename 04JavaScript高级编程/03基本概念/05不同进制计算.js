function f1() {
    let a = "1011"; // 2进制
    let b = "1000"; // 2进制
    let c = parseInt(a, 2) + parseInt(b, 2);
    console.log(c.toString(2));// 10011;
}

function f2() {
    let a = "0x11";//17
    let b = "0o11";//9
    let c = Number(a) + Number(b);
    console.log(c);//26
    console.log(c.toString(2)); //11010
}
// 不同进制进行计算，都会直接转成10进制进行运算
function f3() {
    let a = 0b100;
    let b = 0b101;
    let c = 0o101;
    let d = 10;
    let e = a+b;
    console.log(a + b);
    console.log(a + c);
    console.log(a + d);
    console.log(e);
}

f1();
f2();
f3();