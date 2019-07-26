
    // 设计思路，如果字符串长度为0 则直接返回空数组。
    // 依次取出字符串中的字符。看结果数组对象中有没有存在这个字符，有则把它的num加1.并且结束这次循环。如果结果对象
    //数组遍历完了都还没有。则说明该字符第一次遇到这直接push进去
    function countChar(str) {
        if (str.length === 0) {
            return [];
        }
        let res = [];
        for (let i = 0; i < str.length; i++) {
            let keyWord = str.charAt(i);
            let flag = true;// 判断是否需要直接push结果对象数组
            for (let n = 0; n < res.length; n++) {
                if (res[n].key === keyWord) {
                    res[n].num++;
                    flag = false;// 存在相等的，则不需要直接push进去
                    break;
                }
            }
            if (flag) {
                res.push({key: keyWord, num: 1})
            }
        }
        return res;
    }
    let res = countChar("abbcccddddeeeefffffggggggg")
    res.sort(function (a,b) {
        return a.num-b.num;
    });
    console.log(res);
