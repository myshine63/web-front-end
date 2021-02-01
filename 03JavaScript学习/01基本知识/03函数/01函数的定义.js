// 1. js中允许函数先调用在定义
f1();

function f1() {
  console.log('hello tom')
}

// 2. 匿名函数不能先调用再定义

let f2 = () => {
  console.log('hello jerry')
}
f2()

// 3. 可以不使用参数

function f3(name) {
  console.log('hello spike')
}

f3()