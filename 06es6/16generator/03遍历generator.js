/*for of 循环会依次执行函数,并且返回对应的对象*/
function* f() {
    yield 1;
    yield 2;
    console.log('hello word');

    function f2() {
        console.log('beautiful girl');
    }

    f2();
    yield 3
}

let generator = f();
for (let v of generator) {
    console.log(v);
}

/*for of 循环遇到done的值为true时,会停止循环,并且不会遍历return返回值*/
function* f3() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

for (let i of f3()) {
    console.log(i);//只会输出1,2,3
}
