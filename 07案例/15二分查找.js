let arr = [2, 4, 6, 8, 10];

function search(arr, value) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] < value) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return null;
}

console.log(search(arr, 20));
