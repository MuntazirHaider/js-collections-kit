class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
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
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
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
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        this.length++;
    }

    deleteHead() {
        if (this.isEmpty()) return null;
        const deletedValue = this.head.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return deletedValue;
    }

    deleteTail() {
        if (this.isEmpty()) return null;
        const deletedValue = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return deletedValue;
    }

    deleteByValue(target) {
        if (this.isEmpty()) return null;
        if (this.head.data === target) {
            return this.deleteHead();
        }
        if (this.tail.data === target) {
            return this.deleteTail();
        }
        let current = this.head;
        while (current && current.data !== target) {
            current = current.next;
        }
        if (!current) return null;
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;
        this.length--;
        return target;
    }

    deleteByIndex(index) {
        if (index < 0 || index >= this.length) {
            return null; 
        }
        if (index === 0) return this.deleteHead();
        if (index === this.length - 1) return this.deleteTail();
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;
        this.length--;
        return current.data;
    }

    // Show all nodes
    print() {
        if (!this.head) return ''; 
        let curr = this.head;
        let list = '';
        while (curr) {
            list += curr.data + " ";
            curr = curr.next;
        }
        return list.trim();
    }

    searchByValue(data) {
        if (!this.head) return null;
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return null;
    }

    searchByIndex(idx) {
        if (!this.head || idx < 0 || idx >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current.next;
        }
        return current.data;
    }

    reverse() {
        if (this.isEmpty()) return;

        let current = this.head;
        let prevNode = null;
        let nextNode = null;

        while (current !== null) {
            nextNode = current.next;

            current.next = prevNode;
            current.prev = nextNode;

            prevNode = current;
            current = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;
    }
}
