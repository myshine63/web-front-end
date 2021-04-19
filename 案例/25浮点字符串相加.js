// 这个方法可以计算正整数字符串相加
function addInt(a, b) {
  // 让a，b字符串长度一样，因此高位需要用0填充
  if (a.length < b.length) {
    a = a.padStart(b.length, "0")
  } else {
    b = b.padStart(a.length, "0")
  }
  let m, n;
  let res = '';
  let flag = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    m = Number(a.charAt(i));
    n = Number(b.charAt(i));
    res = (m + n + flag) % 10 + res;
    flag = Math.floor((m + n + flag) / 10);
  }
  if (flag) {
    res = flag + res
  }
  return res
}


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



console.log(addInt("9999999", "999"));