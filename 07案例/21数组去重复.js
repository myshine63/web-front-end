var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flat1(arr) {
    let res = [];z
    function f(a) {
        while (a.length) {
            let ele = a.shift();
            if (ele instanceof Array) {
                f(ele);
            } else {
                if (!res.includes(ele)) {
                    res.push(ele);
                }
            }
        }
    }
    
    f(arr);
    return res
}

function flat2(arr) {
    while (arr.some(item => {
        return Array.isArray(item)
    })) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flat1(arr));
console.log(arr);
console.log(flat2(arr));