/*return(值),该方法返回一个值,并结束generator函数,相当于增加了一个return语句*/
function* f() {
    yield 1;
    //相当于在这里增加了 return 'hello word';
    yield 2;
    yield 3;
}

let a = f();
console.log(a.next());//{value:1,done:false}
console.log(a.return('hello word'));//{value:'hello word',done:true}
console.log(a.next());//{value:undefined,done:true}
/*当generator函数有finally语句时,相当于在finally最后增加了一个return语句*/
function* f1() {
    try {
        yield 1;
        yield 2;
    } catch {
    } finally {
        yield 3
        yield 6
        //相当于在这里增加了 return 4;
    }
    yield 5
}

let b = f1();
console.log(b.next());// {value: 1, done: false }
console.log(b.return(4));//{ value: 3, done: false }
console.log(b.next()); //{ value: 6, done: false }
console.log(b.next()); //{ value: 4, done: true }
