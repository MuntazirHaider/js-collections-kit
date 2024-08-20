export default class AdjacencyList {
    constructor() {
        this.list = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.list.has(vertex)) {
            this.list.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.list.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.list.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.list.get(vertex1).push(vertex2);
        this.list.get(vertex2).push(vertex1); // Comment this line if it's a directed graph
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.list.has(vertex1)) {
            this.list.set(vertex1, this.list.get(vertex1).filter(v => v !== vertex2));
        }
        if (this.list.has(vertex2)) {
            this.list.set(vertex2, this.list.get(vertex2).filter(v => v !== vertex1));
        }
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        if (this.list.has(vertex)) {
            for (let adjacentVertex of this.list.get(vertex)) {
                this.removeEdge(vertex, adjacentVertex);
            }
            this.list.delete(vertex);
        }
    }

    // Get neighbors of a vertex
    getNeighbors(vertex) {
        return this.list.has(vertex) ? this.list.get(vertex) : [];
    }

    // Check if the graph contains a vertex
    hasVertex(vertex) {
        return this.list.has(vertex);
    }

    // Check if there is an edge between two vertices
    hasEdge(vertex1, vertex2) {
        return this.list.has(vertex1) && this.list.get(vertex1).includes(vertex2);
    }

    // Display the adjacency list
    display() {
        let result = '';
        for (let [vertex, edges] of this.list.entries()) {
            result += `${vertex}->${edges.join(',')}` + " ";
        }
        return result.trim();
    }

    // Get all vertices
    getVertices() {
        return Array.from(this.list.keys());
    }

    // Check if graph is empty
    isEmpty() {
        return this.list.size === 0;
    }

    // Get the number of vertices
    vertexCount() {
        return this.list.size;
    }

    // Get the number of edges
    edgeCount() {
        let count = 0;
        for (let [vertex, edges] of this.list.entries()) {
            count += edges.length;
        }
        return count / 2; // Divide by 2 for undirected graphs
    }
}