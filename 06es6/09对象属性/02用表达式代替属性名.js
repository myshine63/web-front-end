/*说明：obj[变量]=obj["变量的值"]=obj.变量的值,obj['字符串']=obj.字符串;
* 1.对象内部 name='name'=['name'];
* 2.对象内部 [name]=test='test'=['test']
* 3.获取属性的方法：
* obj.name=obj.['name'],
* obj[name]=obj.test=obj['test']
* */
let name = 'tom';
let obj = {
    name,
    [name]: "cat",
    "name": "jerry",
    ['name']: "bob",

};
console.log(obj.name);//bob
console.log(obj[name]);//cat
console.log(obj["name"]);//bob
console.log(obj.tom);//cat