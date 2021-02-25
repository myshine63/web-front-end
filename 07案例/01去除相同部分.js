let a = [1, 2, 3];
let b = [2, 3, 4];
let A = a.filter(value => !b.includes(value));
let B = b.filter(value => !a.includes(value));
console.log(A);
console.log(B)
