/*map数据结构是 键-值 的形式，与传统的对象不一样的是，他的键可以不是字符串*/

/*创建map数据结构,可以接受一个数组作为参数,该数组的每一个元素都是一个有2个元素的数组*/
let map = new Map([  //通过数组创建
    ['name', 'zhangshan'],
    ['age', 'xiaowang']  //注意这里如果写成 ['name','xiaowang'];将是对上面一行的覆盖
]);
//通过set方法添加数据
map.set('he', 'word');
//通过get方法获取数据
map.get('he');
//类似于set数据结构 都有has,delete,clear,
map.has('name');
map.delete('name');
console.log(map)
