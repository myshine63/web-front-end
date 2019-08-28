// 这2个方法其实用自带的parseInt和parseFloat就可以计算出来。这里主要展示不用这些定义好的方法
// 应该怎么做。而且当数字的值超出js数值得上限时。就就可以吧数组转换成字符串操作

// 计算带有小数的相加
function add(a, b, radix = 10) {
    let arr1 = a.split(".");
    let arr2 = b.split(".");
    // 计算出a,b小数部分的长度
    let m = arr1[1].length;
    let n = arr2[1].length;
    // 计算出a,b小数部分最大的长度。
    let index = m > n ? m : n;
    // 下面的if操作是为了对齐a，b小数部分。因此需要用0去填充，方便计算
    if (m < n) {
        arr1[1] = arr1[1].padEnd(n, "0")
    } else {
        arr2[1] = arr2[1].padEnd(m, "0")
    }
    // 得到a，b去除小数点后的值，并且这个时候a，b的长度都一样了。然后计算出他们的和
    let sum = addInt(arr1.join(""), arr2.join(""), radix);
    // 得到和以后需要把小数点插入进去。因此要根据上面保存的小数部分的长度计算出插入位置
    index = sum.length - index;

    // 插入小数点然后返回结果
    return sum.slice(0, index) + "." + sum.slice(index);
}

// 这个方法可以计算整数字符串相加，并且还有进制，默认10进制
function addInt(a, b, radix = 10) {
    // 让a，b字符串长度一样，因此高位需要用0填充
    if (a.length < b.length) {
        a = a.padStart(b.length, "0")
    } else {
        b = b.padStart(a.length, "0")
    }
    // 将a，b转换成数组，并且把字符转成了数字
    let arr1 = Array.from(a, function (val) {
        return Number(val);
    });
    let arr2 = Array.from(b, function (val) {
        return Number(val);
    });
    // 用来保存结果
    let res = [];
    // 用来保存进位
    let flag = 0;
    while (arr1.length && arr2.length) {
        let sum = arr1.pop() + arr2.pop() + flag;
        // 计算出当前位数的值
        res.unshift(sum % radix);
        // 计算出需要进位的值
        flag = Math.floor(sum / radix);
    }
    if (flag) {
        res.unshift(flag)
    }
    return res.join("");
}

console.log(add("19.55", "1.55555"));