export default class DisjointSet {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((_, index) => index);
        this.rank = new Array(size).fill(0);
    }

    // Find the representative (root) of the set containing the element
    find(element) {
        if (this.parent[element] !== element) {
            this.parent[element] = this.find(this.parent[element]); // Path compression
        }
        return this.parent[element];
    }

    // Union the sets containing elements x and y
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            // Union by rank
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }

    // Check if elements x and y are in the same set
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }

    // Get the parent array (useful for debugging)
    getParents() {
        return this.parent;
    }

    // Get the rank array (useful for debugging)
    getRanks() {
        return this.rank;
    }

    // Get the number of distinct sets
    getSetCount() {
        const uniqueRoots = new Set();
        for (let i = 0; i < this.parent.length; i++) {
            uniqueRoots.add(this.find(i));
        }
        return uniqueRoots.size;
    }
}
