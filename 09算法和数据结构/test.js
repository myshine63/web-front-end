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
        return this.length;
    }

    dequeue() {
        if (this.length) {
            this.length--;
            let res = this.items[this.currentIndex];
            delete this.items[this.currentIndex];
            this.currentIndex++;
            return res
        }
    }

    clear() {
        this.length = 0;
        this.items = {};
        this.currentIndex = 0
    }
}