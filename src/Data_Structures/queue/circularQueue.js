export default class CircularQueue {
    constructor(max = 10) {
        this.queue = new Array(max);
        this.max = max;
        this.tail = -1;
        this.head = -1;
    }

    enqueue(item) {
        if ((this.tail + 1) % this.max === this.head) {
        this.dequeue();    
        };

        if (this.head === -1) this.head = 0; 

        this.tail = (this.tail + 1) % this.max;
        this.queue[this.tail] = item;
    }

    dequeue() {
        if (this.head === -1) return null; 

        const deleted = this.queue[this.head];
        if (this.head === this.tail) {
            this.head = -1;
            this.tail = -1;
        } else {
            this.head = (this.head + 1) % this.max;
        }

        return deleted;
    }

    front() {
        if (this.head === -1) return null; 
        return this.queue[this.head];
    }

    rear() {
        if (this.tail === -1) return null; 
        return this.queue[this.tail];
    }

    size() {
        if (this.head === -1) return 0; 
        if (this.tail >= this.head) {
            return this.tail - this.head + 1;
        } else {
            return this.max - (this.head - this.tail - 1);
        }
    }

    isEmpty() {
        return this.head === -1;
    }
}