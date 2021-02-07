// 1.通过push和pop创建一个栈,这个栈的出栈和入栈的效率为O(1)

class Arr {
    constructor() {
        this.items = []
    }

    push(...rest) {
        return this.items.push(...rest)
    }

    pop() {
        return this.items.pop()
    }

    clear() {
        this.items = []
    }

    length() {
        return this.items.length
    }
}

// 2.通过shift和unshift出栈和入栈的效率为O(n)

// 3.通过对象出栈和入栈,出栈和入栈的效率为O(1),
class Obj {
    constructor() {
        this.length = 0;
        this.items = {}
    }

    push(...rest) {
        for (let val of rest) {
            this.items[this.length] = val;
            this.length++;
        }
        return this.length
    }

    pop() {
        if (this.length) {
            this.length--;
            let res = this.items[this.length];
            delete this.items[this.length];
            return res;
        }
        return undefined
    }

    clear() {
        this.items = {};
        this.length = 0
    }

    getLength() {
        return this.length;
    }
}

let objArr = new Obj();
console.log(objArr.push(1, 2));
console.log(objArr.pop());
console.log(objArr.push(1, 2));
console.log(objArr.pop());
console.log(objArr.pop());



