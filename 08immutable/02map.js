const {Map} = require('immutable');
const base = Map({name: "tom", age: 14});

function createMap() {
  const a = Map();
  const b = Map([[1, 2], [3, 4]]);
  const c = Map({name: "tom"});
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(c.size);
}

function deleteAll() {
  const base = Map({name: "tom", age: 14});
  let a = base.deleteAll(["age"]);
  console.log(a.toJS()) //{ name: 'tom' }
}

function merge() {
  let a = base.merge({id: 14});
  let b = base.merge({name: 14});
  console.log(a);
  console.log(b);
}

function mergeWith() {
  const one = Map({a: 10, b: 20, c: 30});
  const two = Map({b: 40, a: 50, d: 60});
  one.mergeWith((oldVal, newVal) => oldVal / newVal, two);
// { "a": 0.2, "b": 0.5, "c": 30, "d": 60 }
  two.mergeWith((oldVal, newVal) => oldVal / newVal, one);
// { "b": 2, "a": 5, "d": 60, "c": 30 }
}

function mapEntries() {
  const base = Map({name: "tom", age: 14});
  let a = base.mapEntries(([key, value]) => {
    return [key, value + 1]
  });
  console.log(a); // Map { "name": "tom1", "age": 15 }
}

function setIn() {
  const one = Map({a: {a: 10}});
  console.log(one.setIn(['a', 'a'], "1").toJS())
}

function mergeIn() {
  const one = Map({a: {name: "tom"}});
  const two = Map({id: 15});
  let a = one.mergeIn(['a'], two);
  console.log(a.toJS()) //{ a: { name: 'tom', id: 15 } }
}

function mergeDeep() {
  const one = Map({a: Map({x: 10, y: 10}), b: Map({x: 20, y: 50})})
  const two = Map({a: Map({x: 2}), b: Map({y: 5}), c: Map({z: 3})})
  one.mergeDeep(two)
  // Map {
  //   "a": Map { "x": 2, "y": 10 },
  //   "b": Map { "x": 20, "y": 5 },
  //   "c": Map { "z": 3 }
  // }
}

function withMutation() {
  const base = Map({name: "tom"});
  let res = base.withMutations(map => {
    // 这样的操作不会生成多个map对象
    map.set('name', 'jerry');
    console.log(map);
    map.set('id', 15);
    console.log(map);
  });
}

function mapKeys() {
  const base = Map({name: "tom", age: 14});
  let a = base.mapKeys((key, value) => {
    return value + 1;
  });
  console.log(a);//Map { "tom1": "tom", 15: 14 }
}
function to() {
  const base = Map({name: "tom", age: 14});
  let a = base.toJS();
  let b = base.toJSON();
  let c = base.toArray();
  let d = base.toObject();
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
//  { name: 'tom', age: 14 }
// { name: 'tom', age: 14 }
// [ [ 'name', 'tom' ], [ 'age', 14 ] ]
// { name: 'tom', age: 14 }
}

// createMap();
// deleteAll();
// merge();
// mergeWith();
// mapEntries();
// setIn();
// mergeIn();
// withMutation();
// mapKeys();
// to();