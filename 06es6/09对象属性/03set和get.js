/*用set和get时，函数名字就是属性名字，获取 obj.name  设置  obj.name='' 该方法的好处是，
可以在函数里面写功能当满足一定条件后才能获取和设置值*/
let obj = {
    name: 'tom',
    /*get取值器，用来获取值,不能带有参数*/
    get nm() {
        return this.name
    },
    /*set为赋值器，用于设置属性值，且只能有一个参数*/
    set prop(val) {
        this.age = val;
    }
};
obj.nm;//获取值的方法
obj.prop = 15;//设置值的方法
console.log(obj.nm);
console.log(obj.age);
