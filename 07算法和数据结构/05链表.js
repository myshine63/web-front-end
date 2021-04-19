class Link {
    constructor() {
        this.head = null;
        this.count = 0
    }

    createNode(value) {
        return {
            value,
            next: null
        }
    }

    push(value) {
        let node = this.createNode(value);
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
            this.count++
        } else {
            this.head = node;
            this.count++
        }
    }

    removeAt(index) {
        if (index > 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = this.head.next
            } else {
                let prev;
                for(let i = 0;i<index;i++){
                    prev = current;
                    current = current.next
                }
            }
        }
    }

}

let link = new Link();
link.push(1);
link.push(2);
link.push(3);
link.push(4);
link.push(5);
console.log(link);