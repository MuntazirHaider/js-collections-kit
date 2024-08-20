export default class CircularStack {
    constructor(maxSize = 10) {
        this.stack = new Array(maxSize);
        this.maxSize = maxSize;
        this.front = 0;
        this.rear = -1;
        this.currentSize = 0;
    }

    push(element) {
        if (this.isFull()) {
            this.front = (this.front + 1) % this.maxSize;
        } else {
            this.currentSize++;
        }
        this.rear = (this.rear + 1) % this.maxSize;
        this.stack[this.rear] = element;
    }

    pop() {
        if (this.isEmpty()) return null;
        const poppedElement = this.stack[this.rear];
        this.stack[this.rear] = undefined;
        this.rear = (this.rear - 1 + this.maxSize) % this.maxSize;
        this.currentSize--;
        return poppedElement;
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.rear];
    }

    size() {
        return this.currentSize;
    }

    isEmpty() {
        return this.currentSize === 0;
    }
}