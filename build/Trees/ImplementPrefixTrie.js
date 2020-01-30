"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 208. Implement Prefix Trie
 */
class TrieNode {
    constructor() {
        this.children = new Array(26);
    }
}
class Trie {
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
    console.log(trie.startsWith('app'));
    console.log(trie.search('app'));
};
