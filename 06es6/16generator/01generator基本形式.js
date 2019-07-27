//generator对象只能遍历一次。用for of遍历后再次遍历或者调用next方法，都不再会返回值

//定义generator函数,调用该函数回返回一个遍历器对象，而不是函数的执行结果，或者返回值
function* Generator() {
    yield 12;
    yield {
        name: 'jerry',
        age: 15
    };
    yield 'tom';
    return 'hello word';//return 返回的对象done属性一定是true
}

let generator = Generator();//调用generator函数,生成遍历器对象


//第一次遍历
for (let value of generator) {
    console.log(value);
}

//下面会依次输出，注意执行了for of的generator的对象再调用next，都只会返回{ value: undefined, done: true }
console.log(generator.next());//调用next函数,获得属性
console.log(generator.next());//调用next函数,获得属性
console.log(generator.next());//调用next函数,获得属性
console.log(generator.next());//调用next函数,获得属性
console.log(generator.next());//调用next函数,获得属性
//再一次用for of遍历不会打印任何东西
for (let item of generator) {
    console.log(item);
}

/*当generator函数不包含yield表达式时,他就变成了一个单纯的延迟执行的函数,只用通过next()方法才可以调用它*/
function* f2() {
    console.log('hello word');
    return ('hello word');
}

let generator1 = f2();//如果不是generator函数,这里执行f2函数,并且将返回值赋予给变量
console.log('暂停');
console.log(generator1.next());//执行函数
