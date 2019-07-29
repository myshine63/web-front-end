// yield* generator对象实例。等同于把generator函数中的内容复制一份到当前generator函数制定位置。
// 如果generator函数中有return语句，那么return语句不会被复制过去
function* f1() {
    yield "tom";
    yield console.log("tom");
    return "pick"
}

function* f2() {
    yield 1;
    // yield* f1();//相当于把f1函数内容，除了return语句，都复制到了这里
    // 该方法和上面差不多
    for (let i of f1()) {
        yield i;
    }
    yield 2
}

let gen2 = f2();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        console.log(reset);
        if (reset) {
            i = -1;
        }
    }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next() // { value: 1, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }