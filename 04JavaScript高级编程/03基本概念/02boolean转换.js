// 一下都不会输出
if (undefined) {
    console.log(1)
}
if (null) {
    console.log(2)
}
if (0) {
    console.log(3)
}
if ("") {
    console.log(4)
}
if (NaN) {
    console.log(5)
}
if (NaN == null) {
    console.log(6)
}
if ("" == null) {
    console.log(10)
}

// 以下都会输出
if ([]) {
    console.log(6)
}
if ({}) {
    console.log(7)
}
if (-1) {
    console.log(9)
}
if (undefined == null) {
    console.log(11)
}
if ("" == 0) {
    console.log(12)
}
if("0"==0){
    console.log(13)
}
console.log(Boolean("0"))