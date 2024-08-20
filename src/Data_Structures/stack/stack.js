export default class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if(this.isEmpty()) return null;
        return this.stack.pop();
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}
