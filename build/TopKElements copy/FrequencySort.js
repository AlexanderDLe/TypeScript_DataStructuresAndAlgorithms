"use strict";
/**
 * Grokking the Coding Interview
 *
 * Time Complexity Analysis:
 *
 * O(N) when updating the frequency map for each char.
 *
 * O(D * logD), for each distinct char, push into the heap
 *
 * O(D * logD), for each distinct char, push into result string
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const frequencySort = (str) => {
    const maxSortPattern = (a, b) => {
        return a.frequency - b.frequency;
    };
    let map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    let maxHeap = new Heap([], null, maxSortPattern);
    for (let key in map) {
        maxHeap.push({
            char: key,
            frequency: map[key]
        });
    }
    let result = '';
    while (maxHeap.length) {
        let char = maxHeap.peek().char;
        let freq = maxHeap.pop().frequency;
        let chars = char.repeat(freq);
        result += chars;
    }
    return result;
};
exports.default = () => {
    let str1 = 'Programming';
    let str2 = "abcbab";
    console.log(frequencySort(str1));
    console.log(frequencySort(str2));
};
