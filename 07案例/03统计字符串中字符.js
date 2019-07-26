let str = "aaabbbccccccccccccc";

function countCharNum(str) {
    if (typeof str !== "string") {
        return
    }
    let length = str.length;
    let count = 0;// 已经统计的字符，它们的总数。
    let keyArr = []; // 保存已经统计的字符
    let res = []; // 保存统计结果
    for (let i = 0; i < length; i++) {
        if (count === length) { //如果已经统计的字符的总数等于了字符长度，就不需要统计了，减少遍历次数。
            break;
        }
        let key = str.charAt(i);
        if (keyArr.indexOf(key) !== -1) {
            continue;
        }
        let num = 1;
        for (let n = i + 1; n < length; n++) {
            if (key === str.charAt(n)) {
                num++;
            }
        }
        keyArr.push(key);
        count += num;
        res.push({key, num});
    }
    return res
}

console.log(countCharNum(str));
