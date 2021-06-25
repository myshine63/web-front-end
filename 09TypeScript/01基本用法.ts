// 隐藏式设变量类型
let a = 123;
// 显示设置
let b: string = 'hello tom';
// 申明变量
let c: string;
// 申明数组
let arr1 = [1, a, b]; // 数组类型为any
let arr2: string [];// 只是申明了一个变量为数组字符串类型，还没有初始化，不能用数组的方法
arr2 = []; // 初始化
arr2.push('123');
let arr3: Array<number> = [];// 申明并初始化，
let arr4 = []; // 数组元素类型为any
// 申明枚举类型
enum Color {
    green = 'green',
}

let d = Color.green;
// any 类型
let e: any = 123;
e = 'hello';

// void,表示没有返回值，或者变量的值只能是null，undefined；
function f(): void {
    console.log('hello tom')
}

let g: void;
g = undefined;

// null和undefined可以和任意类型互换
a = null;
b = undefined;
let h = undefined;
h = 123;
h = 'aaa';
// object表示引用类型
let i:object;
i=[]
i={};



