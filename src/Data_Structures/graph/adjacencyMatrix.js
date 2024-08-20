export default class AdjacencyMatrix {
    constructor(vertices) {
        this.vertices = vertices;
        this.matrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if(!this.isValidVertex(vertex1) || !this.isValidVertex(vertex2)) return
        this.matrix[vertex1][vertex2] = 1;
        this.matrix[vertex2][vertex1] = 1; // Comment this line if it's a directed graph
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if(!this.isValidVertex(vertex1) || !this.isValidVertex(vertex2)) return
        this.matrix[vertex1][vertex2] = 0;
        this.matrix[vertex2][vertex1] = 0;
    }

    // Check if there is an edge between two vertices
    hasEdge(vertex1, vertex2) {
        return this.matrix[vertex1][vertex2] === 1;
    }

    getNeighbours(vertex) {
        if(!this.isValidVertex(vertex)) return null
        let result = [];
        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[vertex][i] === 1) {
                result.push(i)
            }
        }
        return result;
    }

      // Check if the graph contains a valid vertex
      isValidVertex(vertex) {
        return vertex >= 0 && vertex < this.vertices;
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

    // Get all vertices
    getVertices() {
        return Array.from({ length: this.vertices }, (_, i) => i);
    }

    // Check if graph is empty
    isEmpty() {
        return this.matrix.every(row => row.every(cell => cell === 0));
    }

    // Get the number of vertices
    vertexCount() {
        return this.vertices;
    }

    // Get the number of edges
    edgeCount() {
        let count = 0;
        for (let i = 0; i < this.vertices; i++) {
            for (let j = i + 1; j < this.vertices; j++) {
                if (this.matrix[i][j] === 1) count++;
            }
        }
        return count;
    }
}