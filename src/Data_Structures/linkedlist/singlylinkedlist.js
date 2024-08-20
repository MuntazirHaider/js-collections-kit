// Creating node
class Node {
    constructor(val) {
        this.val = val || null;
        this.next = null;
    }
}

// Initializing list
export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    // Add node at end
    insertAtTail(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
    }

    // Get the size of list
    size() {
        return this.length;
    }

    // Add node at start
    insertAtHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Insert at any index
    insertAtIndex(val, idx) {
        if (idx < 0 || idx > this.length) {
            return null; // Index out of bounds
        }
        if (idx === 0) {
            this.insertAtHead(val);
            return;
        }
        if (idx === this.length) {
            this.insertAtTail(val);
            return;
        }
        const newNode = new Node(val);
        let prev = this.head;
        for (let i = 1; i < idx; i++) {
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
    }

    // Delete start node
    deleteHead() {
        if (!this.head) return null;
        const deletedVal = this.head.val;
        this.head = this.head.next;
        this.length--;
        return deletedVal;
    }

    // Delete end node
    deleteTail() {
        if (!this.head) return null;
        if (!this.head.next) {
            const deletedVal = this.head.val;
            this.head = null;
            this.length--;
            return deletedVal;
        }
        let curr = this.head;
        let prev = null;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        const deletedVal = curr.val;
        prev.next = null;
        this.length--;
        return deletedVal;
    }

    // Delete node by value
    deleteByValue(target) {
        if (!this.head) return null;
        if (this.head.val === target) return this.deleteHead();
        let prev = null;
        let curr = this.head;
        while (curr && curr.val !== target) {
            prev = curr;
            curr = curr.next;
        }
        if (!curr) return null;
        prev.next = curr.next;
        this.length--;
        return curr.val;
    }

    // Delete any node by index
    deleteByIndex(idx) {
        if (idx < 0 || idx >= this.length) return null; // Index out of bounds
        if (idx === 0) return this.deleteHead();
        if (idx === this.length - 1) return this.deleteTail();
        let prev = null;
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.length--;
        return curr.val;
    }

    // Show all nodes
    print() {
        if (!this.head) return ''; // Return empty string if the list is empty
        let curr = this.head;
        let list = '';
        while (curr) {
            list += curr.val + " ";
            curr = curr.next;
        }
        return list.trim();
    }

    isEmpty() {
        return this.length === 0;
    }

    searchByValue(val) {
        let curr = this.head;
        let idx = 0;
        while (curr) {
            if (curr.val === val) return idx;
            curr = curr.next;
            idx += 1;
        }
        return null;
    }

    searchByIndex(idx) {
        if(idx < 0 || idx >= this.length) return null; 
        let ptr = this.head;
        let curr = 0;
        while (ptr && curr <= idx) {
            if (curr === idx) return ptr.val;
            ptr = ptr.next;
            curr += 1;
        }
        return null;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;

        while (curr !== null) {
            next = curr.next;  
            curr.next = prev; 
            prev = curr;       
            curr = next;       
        }

        this.head = prev; 
    }
}