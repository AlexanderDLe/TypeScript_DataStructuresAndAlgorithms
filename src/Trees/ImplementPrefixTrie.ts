/**
 * 208. Implement Prefix Trie
 */
class TrieNode {
    isWord: boolean;
    children: TrieNode[] = new Array(26);
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert = (word: string): void => {
        let n = this.root;
        for (let i = 0; i < word.length; i++) {
            const charInt = word.charAt(i).charCodeAt(0) - 97;
            if (!n.children[charInt]) n.children[charInt] = new TrieNode();
            n = n.children[charInt];
        }
        n.isWord = true;
    };

    search = (word: string): boolean => {
        let n = this.root;
        for (let i = 0; i < word.length; i++) {
            const charInt = word.charAt(i).charCodeAt(0) - 97;
            if (!n.children[charInt]) return false;
            n = n.children[charInt];
        }
        return n.isWord ? true : false;
    };

    startsWith = (prefix: string): boolean => {
        let n = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const charInt = prefix.charAt(i).charCodeAt(0) - 97;
            if (!n.children[charInt]) return false;
            n = n.children[charInt];
        }
        return true;
    };
}

export default () => {
    const trie = new Trie();
    trie.insert('apple');
    console.log(trie.root);
    console.log(trie.search('apple'));
    console.log(trie.startsWith('app'));
    console.log(trie.search('app'));
};
