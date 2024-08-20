export default class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(item, priority=0) {
        const element = { item, priority };
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority < element.priority) {
                this.queue.splice(i, 0, element);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(element);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift().item;
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0].item;
    }

    rear() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.queue.length - 1].item;
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}