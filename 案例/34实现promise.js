class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
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
            this.value = value;
            this.onResolvedCallbacks.forEach((callback) => callback(this.value));
        }
    };

    reject(reason) {
        if (this.state === 'pending') {
            this.state = 'rejected';
            this.reason = reason;
            this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
        }
    };

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => {
            throw reason;
        };

        const promise = new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        this.resolvePromise(promise, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }

            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
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
