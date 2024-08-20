export default class WeightedAdjacencyList {
    constructor() {
        this.list = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.list.has(vertex)) {
            this.list.set(vertex, []);
        }
    }

    // Add an edge with weight between two vertices
    addEdge(vertex1, vertex2, weight) {
        if (!this.list.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.list.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.list.get(vertex1).push({ vertex: vertex2, weight });
        this.list.get(vertex2).push({ vertex: vertex1, weight }); // For undirected graphs
    }

    // Get the list of neighbors and weights for a vertex
    getNeighbors(vertex) {
        return this.list.get(vertex) || [];
    }

    // Check if the graph contains a vertex
    hasVertex(vertex) {
        return this.list.has(vertex);
    }

    // Check if there's an edge between two vertices
    hasEdge(vertex1, vertex2) {
        if (!this.list.has(vertex1)) return false;
        return this.list.get(vertex1).some(edge => edge.vertex === vertex2);
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (!this.list.has(vertex1) || !this.list.has(vertex2)) return;

        this.list.set(vertex1, this.list.get(vertex1).filter(edge => edge.vertex !== vertex2));
        this.list.set(vertex2, this.list.get(vertex2).filter(edge => edge.vertex !== vertex1)); // For undirected graphs
    }

    // Remove a vertex and all associated edges
    removeVertex(vertex) {
        if (!this.list.has(vertex)) return;

        this.list.delete(vertex);

        for (let [key, edges] of this.list.entries()) {
            this.list.set(key, edges.filter(edge => edge.vertex !== vertex));
        }
    }

    // Get all vertices in the graph
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