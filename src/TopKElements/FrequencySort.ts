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

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const frequencySort = (str:string): string => {
    const maxSortPattern = (a:any,b:any) => {
        return a.frequency - b.frequency;
    }
    let map: any = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    let maxHeap = new Heap([], null, maxSortPattern);
    for (let key in map) {
        maxHeap.push({
            char: key,
            frequency: map[key]
        })
    }

    let result = '';
    while (maxHeap.length) {
        let char = maxHeap.peek().char;
        let freq = maxHeap.pop().frequency;
        let chars = char.repeat(freq);

        result += chars;
    }

    return result;
}

export default () => {
    let str1 = 'Programming';
    let str2 = "abcbab";

    console.log(frequencySort(str1));
    console.log(frequencySort(str2));
};
