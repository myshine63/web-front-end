// 可选参数必须在必选参数后面
function print(name: string, age?: number): void {
    console.log(name, age);
}

// 等同于上面类型
function f1(name: string = 'tom', age = 123): void {
    console.log(name, age);
}

// rest参数K
function f2(name: string, ...rest: string[]): void {
    console.log(name, ...rest);
}

// 使用this
let obj = {
    name: 'tom',
    say(this:void) {
        return function (): void {
            console.log(this.name)
        }
    }
}
