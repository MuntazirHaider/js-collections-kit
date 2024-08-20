class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class CircularLinkedList {
    constructor(maxLength = 10) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.maxLength = maxLength;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Points to itself
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.length++;
        this.checkOverflow();
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Points to itself
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.length++;
        this.checkOverflow();
    }

    insertAtIndex(data, idx) {
        if (idx < 0 || idx > this.length) {
            return null;
        }
        if (idx === 0) {
            this.insertAtHead(data);
            return;
        }
        if (idx === this.length) {
            this.insertAtTail(data);
            return;
        }

        const newNode = new Node(data);
        let prev = this.head;
        let currIdx = 0;

        while (currIdx < idx - 1) {
            prev = prev.next;
            currIdx++;
        }

        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        this.checkOverflow();
    }

    deleteHead() {
        if (this.isEmpty()) return null;

        const removedData = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }

        this.length--;
        return removedData;
    }

    deleteTail() {
        if (this.isEmpty()) return null;

        const removedData = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;
            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            this.tail = curr;
            this.tail.next = this.head;
        }

        this.length--;
        return removedData;
    }

    deleteByIndex(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx === 0) return this.deleteHead();
        if (idx === this.length - 1) return this.deleteTail();

        let prev = this.head;
        let currIdx = 0;

        while (currIdx < idx - 1) {
            prev = prev.next;
            currIdx++;
        }

        const removedData = prev.next.data;
        prev.next = prev.next.next;
        this.length--;

        return removedData;
    }

    deleteByValue(value) {
        if (this.isEmpty()) return null;

        if (this.head.data === value) {
            return this.deleteHead();
        }

        let prev = this.head;
        let curr = this.head.next;

        while (curr !== this.head) {
            if (curr.data === value) {
                prev.next = curr.next;
                if (curr === this.tail) {
                    this.tail = prev;
                }
                this.length--;
                return value;
            }
            prev = curr;
            curr = curr.next;
        }

        return null;
    }

    searchByValue(value) {
        if (this.isEmpty()) return null;

        let curr = this.head;
        let idx = 0;

        do {
            if (curr.data === value) return idx;
            curr = curr.next;
            idx++;
        } while (curr !== this.head);

        return null;
    }

    searchByIndex(idx) {
        if (idx < 0 || idx >= this.length) return null;

        let curr = this.head;
        let currIdx = 0;

        while (currIdx < idx) {
            curr = curr.next;
            currIdx++;
        }

        return curr.data;
    }

    print() {
        if (this.isEmpty()) return '';

        let curr = this.head;
        let list = '';

        do {
            list += curr.data + ' ';
            curr = curr.next;
        } while (curr !== this.head);

        return list.trim();
    }

    checkOverflow() {
        if (this.length > this.maxLength) {
            this.deleteTail();
        }
    }

    reverse() {
        if (this.isEmpty()) return;

        let prev = null;
        let curr = this.head;
        let next = null;

        do {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        } while (curr !== this.head);

        this.head.next = prev; // reconnect the last node to the new head
        this.head = prev;
    }
}
