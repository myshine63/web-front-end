let a = {a: 1, b: 2};
let b = {b: 2, a: 1};
console.log(JSON.stringify(a));
console.log(JSON.stringify(b));
let c = JSON.parse(JSON.stringify(a));
let d = JSON.parse(JSON.stringify(b));
let e = JSON.parse(JSON.stringify(a));
console.log(a === b);
console.log(a === e);