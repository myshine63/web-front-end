// reject和resolve都用于把参数变成promise实例
Promise.resolve({mame: "tom"}).then(x => {
    console.log(x)
});
Promise.reject("发生了错误").catch(x => {
    console.log(x)
});