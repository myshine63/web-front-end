async function f() {
    throw new Error();
}

f().then(() => {
    console.log('success')
}).catch(err => {
    console.log('err')
});