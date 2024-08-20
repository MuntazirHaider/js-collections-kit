export default class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    hasParent(index) {
        return index > 0;
    }

    getLeftChild(index) {
        return index * 2 + 1;
    }

    getRightChild(index) {
        return index * 2 + 2;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.heap[this.getParent(index)] > this.heap[index]) {
            this.swap(this.getParent(index), index);
            index = this.getParent(index);
        }
    }

    get() {
        this.swap(0, this.heap.length - 1);
        const min = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChild(index) < this.heap.length) {
            const leftChildIndex = this.getLeftChild(index);
            const rightChildIndex = this.getRightChild(index);
            let minChildIndex = leftChildIndex;

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                minChildIndex = rightChildIndex;
            }

            if (this.heap[minChildIndex] < this.heap[index]) {
                this.swap(minChildIndex, index);
                index = minChildIndex;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}