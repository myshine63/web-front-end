/*catch方法用于捕捉reject中的错误*/
new Promise((resolve, reject) => {
    reject("2222");
}).catch(x => {
    console.log(x);
});

//catch 捕捉创建promise抛出的错误

new Promise((resolve, reject) => {
    reject(new Error("错误"))
}).catch(x => {
    console.log(x.message)
});

// catch 用于捕捉then方法抛出的错误

new Promise((resolve) => {
    resolve()
}).then(() => {
    throw new Error("then方法中的错误")
}).catch(x => console.log(x.message));

// 当2个或者多个then方法都抛出错误时，第一个then方法后面的then都不会执行，因此只会捕捉第一个错误
new Promise((resolve) => {
    resolve();
}).then(() => {
    throw new Error("错误1")
}).then(() => {
    // then方法抛出错误后；后面的then方法就不会再执行
    console.log(111);
    throw new Error("错误2")
}).catch(x => {
    // 捕捉到第一个错误
    console.log(x.message)
});