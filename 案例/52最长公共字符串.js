var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let flag = true, i = 0, res = '', s;
  let str = strs.shift();
  if(!str){
    return ''
  }
  while (flag) {
    s = res + str.charAt(i);
    if (strs.every(val => {
      return val.startsWith(s)
    })) {
      i++;
      res = s;
    } else {
      flag = false
    }
  }
  return res
};

console.log(longestCommonPrefix([["flower","flower","flower","flower"]]))