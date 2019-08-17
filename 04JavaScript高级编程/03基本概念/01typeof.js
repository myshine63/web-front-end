function f() {

}

console.log(typeof []);//object
console.log(typeof {});//object
console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "123");//string
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof Symbol());//symbol
console.log(typeof f);//function
console.log(typeof f == "object");//false
