const {List, Set} = require('immutable');

const list = List([1, 2, 3]);

function createList() {
  const emptyList = List();
  const listArr = List([1, 2, 3, 4]);
  console.log(listArr);// List [ 1, 2, 3, 4 ]
  console.log(listArr[0]);//undefined

  const set = Set([1, 2, 3, 4]);
  const lestSet = List(set);
  console.log(lestSet);// List [ 1, 2, 3, 4 ]
  List("tom");
  List.of(..."tom");// List [ "t", "o", "m" ]
  List.of(1, 2, 3, 4);// List [ 1, 2, 3, 4 ]
  console.log(lestSet.size);// List.size()获取长度
  let a =listArr.set(10,5)
  console.log(a);
  console.log(a.get(111));

}

// List的set,delete,insert,clear,push,pop,unshift,shift,update,setSize.都不会改变原List而是返回一个新的list
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
  let c = a.zipWith((a, b) => { // 遍历次数为最短的list
    // console.log(a, b)
  }, b);
  console.log(a.zip(b));// 以最短的打包
  console.log(a.zipAll(b)); // 全部打包，缺值得为undefined
  console.log(a.zip(c))
}

function flatten() {
  let list = List([1, 2, [3, 4]]);
  list.flatten(true);
  console.log(list);
  // console.log(list.flatten(fal))
}

function merge() {
  let a = list.merge([1, [2, 3]]);
  console.log(a);
}

function setIn() {
  let list = List([1, 2, [3, 4, [5, 6]]]);
  let a = list.setIn([2, 2, 1], 7);
  console.log(a);
}

function to() {
  let a = list.toJSON();
  let b = list.toJS();
  let c = list.toArray();
  let d = list.toObject();
  console.log(typeof a);
  console.log(typeof [].toString());
  console.log(b);
  console.log(c);
  console.log(d);
}

function search() {
  let a = list.has(0);
  let b = list.includes(1);
  console.log(a, b);
}

// createList()
// listSet()
// concat();
// flatmap();
// zip();
// flatten()
// merge();
// setIn()
to();
// search();
