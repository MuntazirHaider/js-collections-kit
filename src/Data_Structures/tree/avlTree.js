class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

export default class AvlTree {
    constructor() {
        this.root = null;
    }

    // Insert a node
    insert(data) {
        this.root = this.insertNode(this.root, data);
    }

    insertNode(node, data) {
        if (node === null) {
            return new TreeNode(data);
        }

        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        } else {
            // Duplicate data is not allowed
            return node;
        }

        // Update the height of the ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get the balance factor
        const balance = this.getBalance(node);

        // Perform rotations to balance the tree

        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // search a node
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

    // Delete a node
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(node, data) {
        if (node === null) {
            return node;
        }

        if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
        } else {
            // Node with one or no children
            if ((node.left === null) || (node.right === null)) {
                let temp = node.left ? node.left : node.right;

                if (temp === null) {
                    // No child case
                    temp = node;
                    node = null;
                } else {
                    // One child case
                    node = temp;
                }
            } else {
                // Node with two children
                let temp = this.getMin(node.right);

                // Copy the inorder successor's data to this node
                node.data = temp.data;

                // Delete the inorder successor
                node.right = this.deleteNode(node.right, temp.data);
            }
        }

        if (node === null) {
            return node;
        }

        // Update the height of the current node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get the balance factor
        const balance = this.getBalance(node);

        // Perform rotations to balance the tree

        // Left Left Case
        if (balance > 1 && this.getBalance(node.left) >= 0) {
            return this.rightRotate(node);
        }

        // Left Right Case
        if (balance > 1 && this.getBalance(node.left) < 0) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && this.getBalance(node.right) <= 0) {
            return this.leftRotate(node);
        }

        // Right Left Case
        if (balance < -1 && this.getBalance(node.right) > 0) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // Rotate right
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

        // Return new root
        return x;
    }

    // Rotate left
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        // Return new root
        return y;
    }

    // Get the height of the tree
    getHeight(node) {
        if (node === null) return 0;
        return node.height;
    }

    // Get the balance factor of the node
    getBalance(node) {
        if (node === null) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Find the minimum value node in the tree
    getMin(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    // Find the maximum value node in the tree
    getMax(node) {
        let current = node;
        while (current.right !== null) {
            current = current.right;
        }
        return current;
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
    height() {
        return this.getHeight(this.root);
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
}