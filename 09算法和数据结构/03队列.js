// 用对象实现队列
class Queue {
    constructor() {
        this.length = 0;
        this.items = {};
        this.currentIndex = 0;
    }

    enqueue(...rest) {
        for (let val of rest) {
            this.items[this.length] = val;
            this.length++
        }
        return this.length
    }

    dequeue() {
        if (this.length) {
            let res = this.items[this.currentIndex];
            delete this.items[this.currentIndex];
            this.currentIndex++;
            this.length--;
            return res
        }
        return undefined
    }

    clear() {
        this.items = [];
        this.length = 0;
        this.currentIndex = 0;
    }

    isEmpty() {
        return !Boolean(this.length)
    }

    size() {
        return this.length
    }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1, 2, 3);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.isEmpty());
console.log(queue.size());