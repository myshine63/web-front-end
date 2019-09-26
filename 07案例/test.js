let a = [1, 2, 3].reduce((a, b) => {
    console.log(1111);
    console.log(a);
    console.log(b);
    return a + b;
},10);
console.log(a);