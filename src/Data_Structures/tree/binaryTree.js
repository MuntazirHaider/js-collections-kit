class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class BinaryTree {
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
        if (root.left === null) {
            root.left = newNode;
        } else if (root.right === null) {
            root.right = newNode;
        } else {
            this.insertNode(root.left, newNode);
        }
    }

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(root, data) {
        if (root === null) return false;

        if (root.data === data) return true;

        return this.searchNode(root.left, data) || this.searchNode(root.right, data);
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

    // Check if tree is empty
    isEmpty() {
        return this.root === null;
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
        if (!root) return null;
        let stack = [root];
        let head = root;
        let prev = null;

        while (stack.length > 0) {
            let node = stack.pop();

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);

            if (prev) {
                prev.right = node;
            } else {
                head = node;
            }

            node.left = null;
            prev = node;
        }

        return head;  // Return the head of the linked list
    }

    // Delete a node in the binary tree
    delete(value) {
        if (!this.root) return false;

        const queue = [this.root];
        let targetNode = null;
        let lastNode = null;
        let lastNodeParent = null;

        while (queue.length > 0) {
            const node = queue.shift();
            if (node.data === value) {
                targetNode = node;
            }
            if (node.left) {
                lastNodeParent = node;
                queue.push(node.left);
            }
            if (node.right) {
                lastNodeParent = node;
                queue.push(node.right);
            }
            lastNode = node;
        }

        if (targetNode && lastNode) {
            targetNode.data = lastNode.data;

            if (lastNodeParent) {
                if (lastNodeParent.left === lastNode) {
                    lastNodeParent.left = null;
                } else {
                    lastNodeParent.right = null;
                }
            } else {
                this.root = null;
            }
            return true; // Successfully deleted
        }

        return false; // Node with the given value not found
    }
}