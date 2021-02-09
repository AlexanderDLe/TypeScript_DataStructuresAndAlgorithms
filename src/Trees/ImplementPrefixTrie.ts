/**
 * 208. Implement Prefix Trie
 */
class TrieNode {
    isWord: boolean;
    children: TrieNode[] = new Array(26);

    constructor() {
        this.isWord = false;
    }
}

type Node = TrieNode | null;

class Trie {
    root: Node = null;

    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word: string): void {
        let n: Node = this.root;
        for (let i = 0; i < word.length; i++) {
            let code = word[i].charCodeAt(0) - 97;

            if (!n.children[code]) n.children[code] = new TrieNode;
            n = n.children[code];

        }
        n.isWord = true;
    }

    search(word: string): boolean {
        let n: Node = this.root;

        for (let i = 0; i < word.length; i++) {
            let code = word[i].charCodeAt(0) - 97;

            if (!n.children[code]) return false;
            else n = n.children[code];
        }

        if (n.isWord) return true;
        else return false;
    }

    startsWith(prefix: string): boolean {
        let n: Node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let code = prefix[i].charCodeAt(0) - 97;

            if (!n.children[code]) return false;
            else n = n.children[code];
        }

        return true;
    }
}

class TrieB {
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
    console.log(trie.search('app'));
    console.log(trie.startsWith('app'));
    trie.insert('app');
    console.log(trie.search('app'));
};
