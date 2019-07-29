// 形式一
function* f() {
    var flag = true;
    while (true) {
        yield console.log(flag);
        flag = !flag;
    }
}

let gen = f();
gen.next()
gen.next()
gen.next()

// 形式二

function* f1() {
    while (true) {
        console.log(true);
        yield;
        console.log(false);
        yield;
    }
}

let gen1 = f1();
gen1.next();
gen1.next();
gen1.next();
gen1.next();