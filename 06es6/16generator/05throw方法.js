// Generator.prototype.throw方法用于抛出generator对象实例的错误。它可以在generator函数内部取捕捉
//throw方法被内部的catch捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法。
//throw方法抛出的错误被外部的catch捕捉后。会终结generator遍历
// 如果错误没有被捕捉，则会报错

function* f() {
    try {
        console.log(111);
        yield 123;
    } catch (e) {
        console.log(222);
        console.log('内部捕捉', e);
    }
    yield console.log("再次执行1");
    yield console.log("再次执行2");
}

let generator = f();
generator.next();//启动执行generator函数。会执行try中的模块。
try {
    generator.throw('a');//该错误会被内部的catch捕捉，捕捉后可以再次调用next方法
    generator.throw('b');//该错误会被外部的catch捕捉，并且,后面的代码都不会再执行
    console.log(generator.next());//不会执行
    console.log(111111);//不会执行
} catch (e) {
    console.log('外部捕捉', e);
}
console.log(generator.next());//{ value: undefined, done: true }

// generator.throw("未捕捉");

