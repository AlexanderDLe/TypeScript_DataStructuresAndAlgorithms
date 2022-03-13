"use strict";
/**
 *  1065. Index Pairs of a String
 */
Object.defineProperty(exports, "__esModule", { value: true });
const indexPairs = (text, words) => {
    const buildTrie = () => {
        const trie = {};
        for (let word of words) {
            let curr = trie;
            for (let char of word) {
                if (!curr[char])
                    curr[char] = {};
                curr = curr[char];
            }
            curr.word = true;
        }
        return trie;
    };
    const trie = buildTrie();
    const result = [];
    const len = text.length;
    for (let start = 0; start < len; start++) {
        let node = trie;
        for (let i = start; i < len; i++) {
            let char = text[i];
            if (!node[char])
                break;
            node = node[char];
            if (node.word)
                result.push([start, i]);
        }
    }
    return result;
};
exports.default = () => {
    const text = 'thestoryofleetcodeandme';
    const words = ["story", "fleet", "leetcode"];
    console.log(indexPairs(text, words));
};
