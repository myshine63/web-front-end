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
})
    .catch(x => console.log(x.message));