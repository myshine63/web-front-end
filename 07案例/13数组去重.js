var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let set = new Set();

function f(arr) {
    while (arr.length) {
        let val = arr.shift();
        if (val instanceof Array) {
            f(val)
        } else {
            set.add(val);
        }
    }
}

f(arr);
let res = [...set];
res.sort(function (a, b) {
    return a - b;
});
console.log(res);
