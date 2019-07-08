/*Object.is()方法与 == 和 === 的区别在于 +0===-0(true),NaN===NaN(false)
* Object.is(-0,+0) false  Object.is(NaN,NaN) true 其他没有区别
* */
console.log(+0 === -0); //true
console.log(NaN === NaN);//false
console.log(Object.is(+0, -0));//false
console.log(Object.is(NaN, NaN));//true