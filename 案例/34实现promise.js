// 1. 首先promise构造函数接受一个回调方法，在创建实例时会立即执行。并且如果该方法抛出异常
// 会导致promise变为reject
// 2. 回调方法接受resolve,和reject两个方法
// 3. promise的初始状态为pending
// 4. 调用resolve。状态变为fulfilled
// 5. 调用reject，状态变为rejected
// 6. 状态一旦改变就不可逆
// 7. then方法接受两个方法，分别为fulfilled和rejected的回到
// 8. 如果then方法传入的是不是函数，则会进行透传，则会进行透传
// 9. 如果then方法返回的是一个promise，则会等待promise执行完毕后，在将执行结果进行透传
// 10. then方法抛出的错误会修改后面promise的状态
// 11. then方法不能返回自己本身
// 12. 在promise状态为改变前，多次调用then方法，不会立即执行。

class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.res = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        this.resolve = this.resolve.bind(this)
        this.reject = this.resolve.reject(this)
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value) {
        if (this.state === 'pending') {
            this.state = 'fulfilled';
            this.res = value;
            this.onResolvedCallbacks.forEach((callback) => callback(this.res));
        }
    };

    reject(reason) {
        if (this.state === 'pending') {
            this.state = 'rejected';
            this.res = reason;
            this.onRejectedCallbacks.forEach((callback) => callback(this.res));
        }
    };

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : value => value;

        const promise = new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.res);
                        this.resolvePromise(promise, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }

            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.res);
                        this.resolvePromise(promise, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }

            if (this.state === 'pending') {
                this.onResolvedCallbacks.push((value) => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(value);
                            this.resolvePromise(promise, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });

                this.onRejectedCallbacks.push((reason) => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(reason);
                            this.resolvePromise(promise, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });
            }
        });

        return promise;
    }

    resolvePromise(promise, x, resolve, reject) {
        if (promise === x) {
            reject(new TypeError('Chaining cycle detected for promise'));
        }

        if (x && (typeof x === 'object' || typeof x === 'function')) {
            let called = false;

            try {
                const then = x.then;

                if (typeof then === 'function') {
                    then.call(
                        x,
                        (value) => {
                            if (called) return;
                            called = true;
                            this.resolvePromise(promise, value, resolve, reject);
                        },
                        (reason) => {
                            if (called) return;
                            called = true;
                            reject(reason);
                        }
                    );
                } else {
                    resolve(x);
                }
            } catch (error) {
                if (called) return;
                called = true;
                reject(error);
            }
        } else {
            resolve(x);
        }
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(resolve, reject);
            }
        });
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const results = [];
            let fulfilledCount = 0;

            const handleFulfilled = (index, value) => {
                results[index] = value;
                fulfilledCount++;

                if (fulfilledCount === promises.length) {
                    resolve(results);
                }
            };

            for (let i = 0; i < promises.length; i++) {
                promises[i].then((value) => handleFulfilled(i, value), reject);
            }
        });
    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }
}
