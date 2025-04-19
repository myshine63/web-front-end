class Task {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.tasks = [];
        this.pending = 0;
        this.starting = false;
    }

    start() {
        let task = this.tasks.shift();
        if (task) {
            this.pending++
            Promise.resolve(task()).finally(() => {
                this.pending--;
                this.start()
            })
        }
    }

    run() {
        while (this.pending < this.maxSize && this.tasks.length) {
            this.start();
        }
    }

    addTask(tasks) {
        this.tasks.push(...tasks)
        !this.starting && this.run()
    }
}


function f(ms) {
    return () => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(ms)
                resolve()
            }, ms)
        })
    }
}

let c = new Task(3)
c.addTask([f(1000), f(2000), f(3000), f(4000)]);

