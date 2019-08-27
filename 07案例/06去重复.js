let a = [1, 2, 7, 9];
let b = [1, 2, 3, 4];
let newa = a.filter(value => {
    return b.indexOf(value) === -1
});
let newb = b.filter(value => {
    return a.indexOf(value) === -1
});
console.log(newa);
console.log(newb);

// 去除重复
let arr = [1, 1, 2, 2, 3, 3, 4, 4];

function uni(arr) {
    return arr.filter((value, index) => {
        return index === arr.indexOf(value);
    })
}

console.log(uni(arr));