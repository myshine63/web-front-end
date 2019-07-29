// yield 表达式自身不返回任何值。
// next方法带有参数时，表示上一次yield表达式的值
// yield表达式，会先把yield的状态返回，再下一次next方法时才会执行运算。
let generator = (function* () {
    yield 'tom';
    console.log(11111);
    console.log('hello' + (yield 'word'));
})();

console.log(generator.next());//输出tom
console.log(generator.next());//输出 word
console.log(generator.next());//进行hello+(yield 'word')计算,并输出语句,在返回对象{value:undefined,done:true}

/*当另外yield本身不会有值,next函数带有参数时,参数表示上一次yield的值,或者说它的值是undefined*/
function* f() {
    yield 'hello';
    let flag = yield 'word';
    console.log(flag);
    let flag1 = 'hello ' + (yield 'beautiful');
    console.log(flag1);
}

let generator1 = f();
console.log(generator1.next());//输出hello;
console.log(generator1.next());//输出word,
console.log(generator1.next());//计算出flag=yield 'word'的值,即undefined再输出,然后输出beautiful
console.log(generator1.next('word'));//用word去代替yield 'beautiful',然后计算出flag1的值='hello word'
// 再输出,然后再输出undefined

function* f1() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) {
            i = -1;
        }
    }
}

var g = f1();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
