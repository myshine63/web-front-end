class EventEmitter {
    constructor() {
        this.subcribes = new Map();
    }

    on(type, fn) {
        let handles = this.subcribes.get(type)
        if (handles) {
            handles.add(fn)
        } else {
            this.subcribes.set(type, new Set([fn]))
        }
    }

    once(type, fn) {

    }

    off(type, fn) {
        let fnSet = this.subcribes.get(type)
        if (fnSet) {
            fnSet.delete(fn)
        }
        this.subcribes.delete(type)
    }

        emit(type, ...args) {
        if (this.subcribes.has(type)) {
            this.subcribes.get(type).forEach(fn => {
                fn(...args)
            })
        }
    }

}

let emitter = new EventEmitter;
emitter.on('log', () => {
    console.log('hello tom')
})
emitter.on('log', () => {
    console.log('hello jerry')
})
emitter.emit('log')
emitter.off('log');
emitter.emit('log')