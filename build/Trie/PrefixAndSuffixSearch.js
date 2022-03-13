"use strict";
/**
 * 745. Prefix and Suffix Search
 *
 * 'apple'
 * 'ale'
 *
 * F_trie = a > p > p > l > e
 *           \
 *            > l > e
 *
 * B_trie = e > l > p > p > a
 *           \
 *            > l > a
 *
 * (['a', 'le'])
 *    ^    ^
 * prefix suffix
 */
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
// Works but current PQ above does not account for index
class WordFilter {
    constructor(words) {
        this.words = words;
        this.buildTries(words);
    }
    f(prefix, suffix) {
        let node = this.trie;
        for (let char of prefix) {
            node = node[char];
            if (!node)
                return -1;
        }
        const maxHeap = this.buildHeapBFS(node);
        while (maxHeap.size()) {
            let { word, index } = maxHeap.dequeue().element;
            console.log(word, index);
            console.log(word.length);
            if (this.checkValidSuffix(word, suffix))
                return index;
        }
        return -1;
    }
    checkValidSuffix(word, suffix) {
        if (suffix.length > word.length)
            return false;
        console.log(word, suffix);
        for (let i = 0; i < suffix.length; i++) {
            let suffixChar = suffix[suffix.length - i - 1];
            let wordChar = word[word.length - i - 1];
            console.log(wordChar, suffixChar);
            if (suffixChar !== wordChar)
                return false;
        }
        return true;
    }
    buildTries(words) {
        this.trie = {};
        for (let index = 0; index < words.length; index++) {
            let word = words[index];
            let node = this.trie;
            for (let i = 0; i < word.length; i++) {
                let F_char = word[i];
                node = (node[F_char] = node[F_char] || {});
            }
            node.end = { word, index };
        }
    }
    buildHeapBFS(node) {
        const maxHeap = new priority_queue_1.MaxPriorityQueue({
            priority: (x) => x.word.length
        });
        const queue = [node];
        let count = queue.length;
        while (queue.length) {
            while (count) {
                let n = queue.shift();
                if (n.end) {
                    let { word, index } = n.end;
                    maxHeap.enqueue({ word, index });
                }
                for (let key in n) {
                    if (key === 'end')
                        continue;
                    queue.push(n[key]);
                }
                count--;
            }
            count = queue.length;
        }
        return maxHeap;
    }
}
exports.default = () => {
    // const wordFilter1 = new WordFilter(['apple', 'ale']);
    // console.log(wordFilter1.f('a', 'e'))
    const wordFilter2 = new WordFilter(["cabaabaaaa", "ccbcababac", "bacaabccba", "bcbbcbacaa", "abcaccbcaa", "accabaccaa", "cabcbbbcca", "ababccabcb", "caccbbcbab", "bccbacbcba"]);
    // console.log(wordFilter2.f("bccbacbcba","a"));
    // console.log(wordFilter2.f("ab","abcaccbcaa"));
    console.log(wordFilter2.f("a", "aa"));
    // console.log(wordFilter2.f("cabaaba","abaaaa"))
    // console.log(wordFilter2.f("cacc","accbbcbab"))
    // console.log(wordFilter2.f("ccbcab","bac"))
    // console.log(wordFilter2.f("bac","cba"))
    // console.log(wordFilter2.f("ac","accabaccaa"))
    // console.log(wordFilter2.f("bcbb","aa"))
    // console.log(wordFilter2.f("ccbca","cbcababac"))
};
