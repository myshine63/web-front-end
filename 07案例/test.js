function f(callback) {
    let count = 0;
    let result;
    return function () {
        if (count === 0) {
            count++;
            result = callback.apply(null, arguments)
        }
        return result;
    }
}

function f1(name) {
    console.log(name);
    return name;
}

let a = f(f1);
a("tom");
a("jerry");
console.log(a("jerry"));