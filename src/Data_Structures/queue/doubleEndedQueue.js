export default class Deque {
    constructor() {
        this.deque = [];
    }

    pushFront(element) {
        this.deque.unshift(element);
    }

    pushBack(element) {
        this.deque.push(element);
    }

    popFront() {
        return this.deque.shift();
    }

    popBack() {
        return this.deque.pop();
    }

    peekFront() {
        return this.deque[0];
    }

    peekBack() {
        return this.deque[this.deque.length - 1];
    }

    size() {
        return this.deque.length;
    }

    isEmpty() {
        return this.deque.length === 0;
    }
}
