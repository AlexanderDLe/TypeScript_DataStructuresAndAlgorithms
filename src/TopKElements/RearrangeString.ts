/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const rearrangeString = (str:string): string => {
    let maxSortPattern = (a:any, b:any) => {
        return a.frequency - b.frequency;
    }
    const maxHeap = new Heap([], null, maxSortPattern);
    const map: any = {};

    for (let char of str) map[char] = (map[char] || 0) + 1;
    for (let key in map) {
        maxHeap.push({char: key, frequency: map[key]})
    }

    let result = '';

    while (maxHeap.length) {
        let curr = maxHeap.pop();
        
        if (result.length > 0 && result[result.length - 1] === curr.char) {
            let next = maxHeap.pop();
            if (!next) return '';

            maxHeap.push(curr);
            curr = next;
        }

        result += curr.char;
        curr.frequency--;

        if (curr.frequency > 0) maxHeap.push(curr);
    }

    return result;
}

export default () => {
    let str1 = 'aappp';
    let str2 = "Programming";
    let str3 = "aapa";

    console.log(rearrangeString(str1));
    console.log(rearrangeString(str2));
    console.log(rearrangeString(str3));
};
