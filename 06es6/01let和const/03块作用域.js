//es5没有块作用域然而es6有
//没有块作用域的缺点：1.内层变量会覆盖外层变量 2.用来循环的变量成为了全局变量
var tmp = 'hello tom';

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f();//将输出undefined

var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5

//块作用域
function test1() {
    let a = 10;
    if (true) {
        let a = 15;
        console.log(a);
    }
    console.log(a);
}

test1();//输出15 和10

//由于在不同环境中的差异,因此应该避免在块作用域中直接定义函数,应该用匿名函数去代替
{
    // function f() {}//直接定义不可取
    let f = function () {//用let去声明不会影响到外面
        console.log('hello word');
    };
    f();//只能在代码块中执行
}
