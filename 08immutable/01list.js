const {List, Map} = require('immutable');

function createList() {
  const emptyList = List();
  const arrList = List([1, 2, 3, 4]);
  const setList = List(new Set([1, 2, 3, 4]));
  let stringList = List("tom");
  console.log(1, emptyList);
  console.log(2, arrList);
  console.log(3, setList);
  console.log(4, stringList);
  let a = List.of(..."tom");// List [ "t", "o", "m" ]
  let b = List.of(1, 2, 3, 4);// List [ 1, 2, 3, 4 ]
  console.log(a);
  console.log(b);
}

function listSet() {
  function sum(collection) {
    return collection.reduce((sum, x) => sum + x, 0)
  }

  let a = List([1, 2, 3])
    .map(x => x + 1)
    .filter(x => x % 2 === 0)
    .update(sum);
  console.log(a)
}

function concat() {
  let list = List([1, 2, 3]);
  let a = list.concat();
  let b = list.concat(1, 2, 3);
  let c = list.concat(list);
  let d = list.concat([1, 2, 3]);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

function flatmap() {
  let list = List(["hello", 'tom']);
  let res = list.flatMap(val => {
    return val
    // return val.split("")
  });
  let list1 = List([[1, 2, 3], [4, 5]]);
  let res1 = list1.flatMap(value => value);
  console.log(res);
  console.log(res1);
}

function zip() {
  const a = List([1, 2, 3, 4, 5]);
  const b = List([4, 5, 5, 5]);
  let c = a.zipWith((listA, listB) => { // 遍历次数为最短的list
    return listA + listB
  }, b);
  console.log(a.zip(b));// 以最短的打包
  console.log(a.zipAll(b)); // 全部打包，缺值得为undefined
  console.log(c)
}

function flatten() {
  let list = List([1, 2, List([3, 4])]);
  console.log(list.flatten()); //List [ 1, 2, 3, 4 ]
}

function merge() {
  const list = List([1, 2, 3]);
  let a = list.merge([1, [2, 3]]);
  console.log(a);
}

function setIn() {
  let list = List([1, 2, [3, 4, List([5, 6])]]);
  let a = list.setIn([2, 2, 1], 7);
  console.log(a.toJS());
}

function to() {
  const list = List([1, 2, 3]);
  let a = list.toJSON();
  let b = list.toJS();
  let c = list.toArray();
  let d = list.toObject();
  console.log(Array.isArray(a)); //true
  console.log(Array.isArray(b)); //true
  console.log(Array.isArray(c)); //true
  console.log(Array.isArray(d)); //true
}

function search() {
  const list = List([1, 2, 3]);
  let a = list.has(0);
  let b = list.includes(1);
  console.log(a, b);
}

function reduce() {
  const list = List([1, 2, 3]);
  let a = list.reduce((count, value) => {
    return count + value;
  }, 0);
  console.log(a);
}

function sortBy() {
  const list = List([
    {id: 9, name: "blue"},
    {id: 12, name: "green"},
    {id: 22, name: "black"},
    {id: 15, name: "red"}
  ]);
  let a = list.sortBy(value => value.id);
  let b = list.sortBy(value => value.name);
  console.log(a.toJS());
  console.log(b.toJS());
}

function sortByGroup() {
  const list = List([
    Map({v: 0}),
    Map({v: 1}),
    Map({v: 1}),
    Map({v: 0}),
    Map({v: 2})
  ]);
  const res = list.groupBy(x => x.get('v'))
  console.log(res)
}

function splice() {
  List(['a', 'b', 'c', 'd']).splice(1, 2, 'q', 'r', 's')
// List [ "a", "q", "r", "s", "d" ]
}

function test() {
  const list = List([1, 2, 3]);
  console.log(list.shift());
  console.log(list.rest())
  console.log(list)
}

function equal() {
  const a = List([1, List([1])]);
  const b = List([1, List([1])]);
  const c = List([1, [1]]);
  const d = List([1, [1]]);
  console.log(a.equals(b)); //true
  console.log(c.equals(d)); //false
}

function update() {
  let list = List([1, 2, 3]);
  let a = list.update(0, value => {
    return value + 1;
  });
  let b = list.update(3, 10, value => {
    return value + 1;
  });
  let c = list.update(3, 10, value => {
    return value;
  });
  let d = list.update(3, value => {
    return value + 1;
  });
  let e = list.update(3, value => {
    return value;
  });
  console.log(a);// List [ 2, 2, 3 ]
  console.log(b);// List [ 1, 2, 3, 11 ]
  console.log(c);// List [ 1, 2, 3 ]
  console.log(d);// List [ 1, 2, 3 , NaN ]
  console.log(e);// List [ 1, 2, 3 ]
}

// createList()
// listSet()
// concat();
// flatmap();
// zip();
// flatten()
// merge();
// setIn();
// to();
// search();
// reduce();
// sortBy();
// sortByGroup();
// splice();
// test();
// equal();
// update();