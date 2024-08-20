export default class Queue {
    constructor() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(x) {
        this.queue[this.tail] = x;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
           return null;
        }
        const deleted = this.queue[this.head];
        delete this.queue[this.head];
        this.head++;
        return deleted;
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.head];
    }

    rear() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.tail - 1];
    }

    isEmpty() {
        return this.head === this.tail;
    }

    size() {
        return this.tail - this.head;
    }
}