var a = [], b = [];
/*for(){}for循环中()内部和{}内部本质是2个作用域,()是{}的父作用域*/
//该循环中都是输出全局变量的m
for (var m = 0; m < 5; m++) {
    a[m] = function () {
        console.log(m);
    }
}
a[2]();//5
//由于let变量具有块作用域,这里的本质相当于每次遍历时都会新生成一个变量n,因此每次都是输出当前的n
for (let n = 0; n < 5; n++) {
    b[n] = function () {
        console.log(n);
    }
}
b[2]();//2
// ()中是父作用域，内部是子作用域，子作用域覆盖了父作用域
for (let i = 0; i < 3; i++) {
    let i = "abc";
    console.log(i);
}
