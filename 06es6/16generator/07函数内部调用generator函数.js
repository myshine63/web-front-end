/*在(yield * 变量)中'*'号的相当于let of 循环变量,在给变量添加yield标志*/

/*yield* 相当于在generator函数内部展开另一个generator函数(忽略return语句,及其后面的语句)*/
function* f1() {
    yield 1;
    return 2;
}

function* f2() {
    yield* f1();
    yield 3;
}

let generator = f2();
console.log('f2:', generator.next());//1
console.log('f2:', generator.next());//3
console.log('f2:', generator.next());//undefined

/*当另一个generator函数有return时,yield*f()会返回返回值*/
function* f3() {
    yield 1;
    return 2;
}

function* f4() {
    let val = yield* f3();//获取返回值,因为return 返回的值没有yield状态
    yield val;//将返回值添加到状态中
    yield 3;
}

let generator1 = f4();
console.log('f4:', generator1.next());//1
console.log('f4:', generator1.next());//2
console.log('f4:', generator1.next());//3
console.log('f4:', generator1.next());//undefined
/*yield* 也可以展开可遍历对象比如数组,字符串,*/
function* f5() {
    yield 1;
    yield* [2, 3,];
    yield* '45'
}

let generator2 = f5();
console.log(generator2.next());//1
console.log(generator2.next());//2
console.log(generator2.next());//3
console.log(generator2.next());//'4'
console.log(generator2.next());//'5'
console.log(generator2.next());//undefined
