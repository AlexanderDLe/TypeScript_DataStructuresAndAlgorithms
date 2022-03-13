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

class TrieA {
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

class TrieC {
    map: {[key: string]: any} = {word: true}

    insert(word: string): void {
        let currMap = this.map;

        for (let char of word) {
            if (!currMap.hasOwnProperty(char)) currMap[char] = {};
            currMap = currMap[char];
        }

        currMap.word = true;
    }

    search(word: string): boolean {
        let currMap = this.map;

        for (let char of word) {
            if (currMap.hasOwnProperty(char)) currMap = currMap[char];
            else return false;
        }

        return currMap.word ? true : false;
    }

    startsWith(prefix: string): boolean {
        let currMap = this.map;

        for (let char of prefix) {
            if (currMap.hasOwnProperty(char)) currMap = currMap[char];
            else return false;
        }

        return true;
    }
}

class Trie {
  map: any;

  constructor() {
    this.map = {};
  }

  insert(word: string): void {
    let curr = this.map;

    for (let char of word) {
      if (!curr[char]) curr[char] = {};
      curr = curr[char];
    }

    curr.word = true;
  }

  search(word: string): boolean {
    let curr = this.map;

    for (let char of word) {
      if (!curr[char]) return false;
      curr = curr[char];
    }

    return curr.word || false;
  }

  startsWith(prefix: string): boolean {
    let curr = this.map;

    for (let char of prefix) {
      if (!curr[char]) return false;
      curr = curr[char];
    }

    return true;
  }
}

export default () => {
    const trie = new Trie();
    trie.insert('apple');
    console.log(trie.search('apple'));
    console.log(trie.search('app'));
    console.log(trie.startsWith('app'));
    trie.insert('app');
    console.log(trie.search('app'));
};
