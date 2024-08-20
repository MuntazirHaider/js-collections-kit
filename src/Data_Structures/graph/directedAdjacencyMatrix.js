export default class DirectedAdjacencyMatrix {
    constructor(size) {
        this.matrix = Array.from({ length: size }, () => new Array(size).fill(0));
        this.size = size;
    }

    // Add an edge from vertex1 to vertex2
    addEdge(vertex1, vertex2) {
        if (!this.isValidVertex(vertex1) || !this.isValidVertex(vertex2)) {
            return;
        } else {
            this.matrix[vertex1][vertex2] = 1;
        }
    }

    // Remove an edge from vertex1 to vertex2
    removeEdge(vertex1, vertex2) {
        if (!this.isValidVertex(vertex1) || !this.isValidVertex(vertex2)) {
            return;
        } else {
            this.matrix[vertex1][vertex2] = 0;
        }
    }

    // Get neighbors (vertices connected by outgoing edges) of a vertex
    getNeighbors(vertex) {
        if (!this.isValidVertex(vertex)) {
           return null;
        }
        
        return this.matrix[vertex]
            .map((edge, index) => edge === 1 ? index : -1)
            .filter(index => index !== -1);
    }

    // Check if the graph contains a valid vertex
    isValidVertex(vertex) {
        return vertex >= 0 && vertex < this.size;
    }

    // Check if there is a directed edge from vertex1 to vertex2
    hasEdge(vertex1, vertex2) {
        if (!this.isValidVertex(vertex1) || !this.isValidVertex(vertex2)) {
            return false;
        } else {
            return this.matrix[vertex1][vertex2] === 1;
        }
    }

    // Display the adjacency matrix
      display() {
        let result = '';
        for (let i = 0; i < this.matrix.length; i++) {
            let temp = '';
            for (let j = 0; j < this.matrix.length; j++) {
                if (this.matrix[i][j] === 1) {
                    temp += `${j},`
                }
            }
            const v = temp.slice(0, -1);
            if (v.length !== 0) {
                result += `${i}->${v}` + ' ';
            }
        }
        return result.trim();
    }

    // Get all vertices (as indices)
    getVertices() {
        return [...Array(this.size).keys()];
    }

    // Check if graph is empty
    isEmpty() {
        return this.matrix.every(row => row.every(cell => cell === 0));
    }

    // Get the number of vertices
    vertexCount() {
        return this.size;
    }

    // Get the number of edges
    edgeCount() {
        let count = 0;
        for (let row of this.matrix) {
            count += row.reduce((sum, value) => sum + value, 0);
        }
        return count;
    }
}