let str = " hello tom good cat ";
console.log(str.includes("cat", 10));//true
console.log(str.indexOf("cat", 10));//15
console.log(str.charAt(15));//c
console.log(str.trimStart()); //不会改变原字符串
console.log(str.trimEnd()); //不会改变原字符串
console.log(str.startsWith("hello"));//false
console.log(str.endsWith("cat "));//true
console.log(str.concat("hello jerry")); //不会改变原字符串

