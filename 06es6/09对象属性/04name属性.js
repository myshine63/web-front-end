/*对象的方法也具有name属性*/
let obj = {
    say() {
        console.log('hello word')
    }
};
console.log(obj.say.name);//say
/*对于使用了set 和get的函数它的 name属性，在属性的描述对象的get 和set下面*/
let obj2 = {
    name: 'tom',
    /*get取值器，用来获取值,不能带有参数*/
    get nm() {
        return this.name
    },
    /*set为赋值器，用于设置属性值，且只能有一个参数*/
    set nm(val) {
        this.age = val;
    }
};
let des = Object.getOwnPropertyDescriptor(obj2, 'nm');
console.log(des.get.name);
console.log(des.set.name);
console.log(des);
