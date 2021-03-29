function getMaxLengthStr(s) {
  let res = '';
  let str = ''
  for (let a of s) {
    if (str.includes(a)) {
      if (str.length > res.length) {
        res = str;
      }
      str = str + a;
      let index = str.indexOf(a);
      str = str.slice(index + 1);
    } else {
      str = str + a
    }
  }
  if (str.length > res.length) {
    res = str;
  }
  return res
}

console.log(getMaxLengthStr("ohomm"))