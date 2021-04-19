// 用数组实现队列
class Queue {
    constructor() {
        this.arr = [];
    }

    // 进队列，效率为O(1)
    enqueue(...rest) {
        return this.arr.push(...rest)
    }

    // 出队列 效率为O(n)
    dequeue() {
        return this.arr.shift();
    }

    // 清空
    clear() {
        this.arr = [];
    }

    // 获取长度
    length() {
        return this.arr.length
    }

    // 是否为空
    isEmpty() {
        return !Boolean(this.arr.length)
    }
}

let queue1 = new Queue();
console.log(queue1.isEmpty());
queue1.enqueue(1, 2, 3);
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.isEmpty());