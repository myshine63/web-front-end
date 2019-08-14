let arr = [2, 5, 3, 7, 1, 6, 4, 3, 9, 8];

function f(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let left = [];
    let right = [];
    let mid = Math.floor(arr.length / 2);
    for (let m = 0; m < arr.length; m++) {
        if (m === mid) {
            continue
        }
        if (arr[m] < arr[mid]) {
            left.push(arr[m])
        } else {
            right.push(arr[m]);
        }
    }
    return f(left).concat(arr[mid], f(right));
}

console.log(f(arr));