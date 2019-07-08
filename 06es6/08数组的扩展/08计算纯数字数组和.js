let arr = [1, 2, 3, 4, 5];
// 计算所有元素和
let count = arr.reduce((count, current) => {
    return count + current;
});
console.log(count);
// 计算大于2的元素和
let count1 = arr.reduce((count, current) => {
    if (current > 2) {
        return count + current
    }
    return count;
});
console.log(count1);