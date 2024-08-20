class TrieNode {
    constructor() {
        this.child = new Map();
        this.end = false;
    }
}

export default class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!curr.child.has(word[i])) {
                curr.child.set(word[i], new TrieNode());
            }

            curr = curr.child.get(word[i]);
        }

        curr.end = true;
    }

    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!curr.child.has(word[i])) {
                return false
            }

            curr = curr.child.get(word[i]);
        }

        return curr.end === true;
    }

    delete(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!curr.child.has(word[i])) {
                return false
            }

            curr = curr.child.get(word[i]);
        }

        curr.end = false;
        return true;
    }
}