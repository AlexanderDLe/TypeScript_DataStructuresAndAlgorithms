"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 208. Implement Prefix Trie
 */
class TrieNode {
    constructor() {
        this.children = new Array(26);
        this.isWord = false;
    }
}
class Trie {
    constructor() {
        this.root = null;
        this.root = new TrieNode();
    }
    insert(word) {
        let n = this.root;
        for (let i = 0; i < word.length; i++) {
            let code = word[i].charCodeAt(0) - 97;
            if (!n.children[code])
                n.children[code] = new TrieNode;
            n = n.children[code];
        }
        n.isWord = true;
    }
    search(word) {
        let n = this.root;
        for (let i = 0; i < word.length; i++) {
            let code = word[i].charCodeAt(0) - 97;
            if (!n.children[code])
                return false;
            else
                n = n.children[code];
        }
        if (n.isWord)
            return true;
        else
            return false;
    }
    startsWith(prefix) {
        let n = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let code = prefix[i].charCodeAt(0) - 97;
            if (!n.children[code])
                return false;
            else
                n = n.children[code];
        }
        return true;
    }
}
class TrieB {
    constructor() {
        this.insert = (word) => {
            let n = this.root;
            for (let i = 0; i < word.length; i++) {
                const charInt = word.charAt(i).charCodeAt(0) - 97;
                if (!n.children[charInt])
                    n.children[charInt] = new TrieNode();
                n = n.children[charInt];
            }
            n.isWord = true;
        };
        this.search = (word) => {
            let n = this.root;
            for (let i = 0; i < word.length; i++) {
                const charInt = word.charAt(i).charCodeAt(0) - 97;
                if (!n.children[charInt])
                    return false;
                n = n.children[charInt];
            }
            return n.isWord ? true : false;
        };
        this.startsWith = (prefix) => {
            let n = this.root;
            for (let i = 0; i < prefix.length; i++) {
                const charInt = prefix.charAt(i).charCodeAt(0) - 97;
                if (!n.children[charInt])
                    return false;
                n = n.children[charInt];
            }
            return true;
        };
        this.root = new TrieNode();
    }
}
exports.default = () => {
    const trie = new Trie();
    trie.insert('apple');
    console.log(trie.root);
    console.log(trie.search('apple'));
    console.log(trie.search('app'));
    console.log(trie.startsWith('app'));
    trie.insert('app');
    console.log(trie.search('app'));
};
