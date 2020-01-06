const {Map} = require('immutable');
const base = Map({name: "tom", age: 14});

function map() {
  const a = Map();
  const b = Map([[1, 2], [3, 4]]);
  const c = Map({name: "tom"});
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(c.size);
  console.log(c.name)
}

function merge() {
  let a = base.merge({id: 14});
  let b = base.merge({name: 14});
  console.log(a);
  console.log(b);
}
function mapEntries() {
  base.mapEntries(value => {
    console.log(value);
    return value
  })
}

// map();
// merge();
// mapEntries();
const map1 = Map()
const map2 = map1.withMutations(map => {
  map.set('a', 1).set('b', 2).set('c', 3)
});
assert.equal(map1.size, 0);
assert.equal(map2.size, 3);
