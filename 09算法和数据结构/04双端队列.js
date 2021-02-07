// 使用数组实现
class Deque {
    constructor() {
        this.arr = []
    }

    addFront(...rest) {
        this.arr.unshift(...rest)
    }

    addEnd(...rest) {
        this.arr.push(...rest)
    }

    removeFront() {
        this.arr.shift()
    }

    removeEnd() {
        this.arr.pop()
    }

    clear() {
        this.arr = []
    }

    size() {
        return this.arr.length
    }

    isEmpty() {
        return !this.arr.length
    }
}