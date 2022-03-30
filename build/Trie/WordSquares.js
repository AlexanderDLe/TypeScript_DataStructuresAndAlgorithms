"use strict";
/**
 *  425. Word Squares
 */
Object.defineProperty(exports, "__esModule", { value: true });
const wordSquaresRef = (words) => {
    const buildTrie = () => {
        const trie = {};
        for (let word of words) {
            let node = trie;
            for (let char of word) {
                node = (node[char] = node[char] || {});
                if (!node.words)
                    node.words = [];
            }
            node.word = word;
        }
        return trie;
    };
    const findWords = (prefix, trie) => {
        const DFS = (node, res) => {
            if (node.word)
                res.push(node.word);
            for (let key in node) {
                if (key === 'word')
                    continue;
                DFS(node[key], res);
            }
        };
        let node = trie;
        const res = [];
        for (let p of prefix) {
            node = node[p];
            if (!node)
                return res;
        }
        DFS(node, res);
        return res;
    };
    const generate = (temp, result, trie) => {
        if (temp.length && temp[0].length === temp.length) {
            result.push(temp);
            return;
        }
        let prefix = '';
        let j = temp.length;
        for (let i = 0; i < temp.length; i++) {
            prefix += temp[i][j];
        }
        const words = findWords(prefix, trie);
        console.log('----');
        console.log(temp);
        console.log(prefix);
        console.log(words);
        for (let word of words) {
            temp.push(word);
            generate(temp.slice(), result, trie);
            temp.pop();
        }
    };
    const trie = buildTrie();
    const result = [];
    generate([], result, trie);
    return result;
};
const wordSquares = (words) => {
    const wordLen = words[0].length;
    const buildTrie = () => {
        const trie = {};
        for (let word of words) {
            let node = trie;
            for (let char of word) {
                node = (node[char] = node[char] || {});
            }
            node.word = word;
        }
        return trie;
    };
    const getWordsStartingWithPrefix = (prefix, trie) => {
        const DFS = (node, res) => {
            if (node.word)
                res.push(node.word);
            for (let char in node) {
                if (char === 'word')
                    continue;
                DFS(node[char], res);
            }
        };
        let node = trie;
        for (let char of prefix) {
            node = node[char];
            if (!node)
                return [];
        }
        let res = [];
        DFS(node, res);
        return res;
    };
    const generate = (temp, result, trie) => {
        if (temp.length && temp.length === wordLen) {
            result.push(temp);
            return;
        }
        let prefix = '';
        let column = temp.length;
        for (let row = 0; row < column; row++) {
            prefix += temp[row][column];
        }
        const candidateWords = getWordsStartingWithPrefix(prefix, trie);
        for (let word of candidateWords) {
            temp.push(word);
            generate([...temp], result, trie);
            temp.pop();
        }
    };
    const trie = buildTrie();
    const result = [];
    generate([], result, trie);
    return result;
};
exports.default = () => {
    // console.log(wordSquares(["area","lead","wall","lady","ball"]))
    console.log(wordSquares(["abat", "baba", "atan", "atal"]));
};
