/*允许使用变量作为对象的属性，这样属性名为变量名，变量值为属性值*/
let att = "hello word";
let obj = {att}; //用变量名做属性 obj={att:'hello word'}
console.log(obj.att);

/*简洁的函数表示*/
function f(x, y) {
    return {x, y}  //相当于{x:x,y:y}
}

let {x, y} = f(1, 2);//通过解构赋值获取返回值
/*简洁的方法*/
let a = {
    hello: function () {
        console.log("hello word")
    },
};
let b = {
    hello() {
        console.log("hello word")
    }
};
a.hello();
b.hello();