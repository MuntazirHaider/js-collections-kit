class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(root, data) {
        if (root === null) return false;

        if (data < root.data) {
            return this.searchNode(root.left, data);
        } else if (data > root.data) {
            return this.searchNode(root.right, data);
        } else {
            return true;
        }
    }
    
    isEmpty(){
        return this.root === null;
    }

    // Inorder traversal (left -> root -> right)
    inOrder() {
        if (!this.root) return [];
        const data = [];
        this.inOrderTraversal(this.root, data);
        return data;
    }

    inOrderTraversal(node, data) {
        if (!node) return;
        this.inOrderTraversal(node.left, data);
        data.push(node.data);
        this.inOrderTraversal(node.right, data);
    }

    // Preorder traversal (root -> left -> right)
    preOrder() {
        if (!this.root) return [];
        const data = [];
        this.preOrderTraversal(this.root, data);
        return data;
    }

    preOrderTraversal(node, data) {
        if (!node) return;
        data.push(node.data);
        this.preOrderTraversal(node.left, data);
        this.preOrderTraversal(node.right, data);
    }

    // Postorder traversal (left -> right -> root)
    postOrder() {
        if (!this.root) return [];
        const data = [];
        this.postOrderTraversal(this.root, data);
        return data;
    }

    postOrderTraversal(node, data) {
        if (!node) return;
        this.postOrderTraversal(node.left, data);
        this.postOrderTraversal(node.right, data);
        data.push(node.data);
    }

    // Level Order Traversal (Breadth-First Traversal)
    levelOrder() {
        if (!this.root) return [];
        const data = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            data.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    // Get the minimum value in the BST
    getMin() {
        if (!this.root) return null;
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    // Get the maximum value in the BST
    getMax() {
        if (!this.root) return null;
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    // Find the height of the tree
    height(node = this.root) {
        if (!node) return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    // Find the depth of a node
    depth(value) {
        return this.depthNode(this.root, value, 0);
    }

    depthNode(node, value, depth) {
        if (!node) return null;
        if (node.data === value) return depth;
        const leftDepth = this.depthNode(node.left, value, depth + 1);
        if (leftDepth !== null) return leftDepth;
        return this.depthNode(node.right, value, depth + 1);
    }

    // Left View of the tree
    leftView() {
        if (!this.root) return [];
        const data = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                if (i === 0) data.push(node.data);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return data;
    }

    // Right View of the tree
    rightView() {
        if (!this.root) return [];
        const data = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                if (i === levelSize - 1) data.push(node.data);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return data;
    }

    // Top View of the tree
    topView() {
        if (!this.root) return [];
        const map = new Map();
        const queue = [{ node: this.root, dist: 0 }];
        while (queue.length > 0) {
            const { node, dist } = queue.shift();
            if (!map.has(dist)) {
                map.set(dist, node.data);
            }
            if (node.left) queue.push({ node: node.left, dist: dist - 1 });
            if (node.right) queue.push({ node: node.right, dist: dist + 1 });
        }
        return Array.from(map.keys()).sort((a, b) => a - b).map(key => map.get(key));
    }
    
        // Flatten the tree to a linked list
    flatten() {
        return this.flattenTree(this.root);
    }

    flattenTree(root) {
    if (!root) return root;
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop();

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);

        if (stack.length > 0) {
            node.right = stack[stack.length - 1];
        }
        node.left = null;
    }

    return root;
};

    // Delete a node in the binary search tree
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) return root;

        if (value < root.data) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node to be deleted found

            // Node with only one child or no child
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            // Node with two children
            root.data = this.getMinNode(root.right).data;
            root.right = this.deleteNode(root.right, root.data);
        }

        return root;
    }

    getMinNode(root) {
        let current = root;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
}