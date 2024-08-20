export default class PriorityStack {
    constructor() {
        this.stack = [];
    }

    push(element, priority = 0) {
        const newElement = { element, priority };
        let inserted = false;

        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i].priority < newElement.priority) {
                this.stack.splice(i, 0, newElement);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            this.stack.push(newElement);
        }
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stack.shift().element; 
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.stack[0].element;  
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}
