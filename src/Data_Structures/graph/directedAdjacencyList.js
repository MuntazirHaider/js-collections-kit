export default class DirectedAdjacencyList {
    constructor() {
        this.list = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.list.has(vertex)) {
            this.list.set(vertex, []);
        }
    }

    // Add an edge from vertex1 to vertex2
    addEdge(vertex1, vertex2) {
        if (!this.list.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.list.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.list.get(vertex1).push(vertex2);
    }

    // Remove an edge from vertex1 to vertex2
    removeEdge(vertex1, vertex2) {
        if (this.list.has(vertex1)) {
            this.list.set(vertex1, this.list.get(vertex1).filter(v => v !== vertex2));
        }
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        if (this.list.has(vertex)) {
            // Remove all edges going to this vertex
            for (let [v, edges] of this.list.entries()) {
                this.list.set(v, edges.filter(e => e !== vertex));
            }

            // Remove all edges starting from this vertex
            this.list.delete(vertex);
        }
    }

    // Get neighbors (outgoing edges) of a vertex
    getNeighbors(vertex) {
        return this.list.has(vertex) ? this.list.get(vertex) : [];
    }

    // Check if the graph contains a vertex
    hasVertex(vertex) {
        return this.list.has(vertex);
    }

    // Check if there is a directed edge from vertex1 to vertex2
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
        return count;
    }
}