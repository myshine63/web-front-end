const add = (x, y) => x + y;
const square = x => x * x;

const f1 = (x, y) => square(add(x, y));
const fn1 = (f1, f2) => (...args) => f2(f1(...args));
const fn2 = (...[f1, ...fns]) => (...args) => {
    let res = f1(...args);
    fns.forEach(fn => {
        res = fn(res);
    })
    return res;
};
let f2 = fn1(add, square);
let f3 = fn2(add, square,square);
console.log(f1(1, 2));
console.log(f2(1, 2));
console.log(f3(1, 2));