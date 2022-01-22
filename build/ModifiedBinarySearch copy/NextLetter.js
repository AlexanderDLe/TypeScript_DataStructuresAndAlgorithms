"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const nextLetter = (letters, key) => {
    let start = 0;
    let end = letters.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let curr = letters[mid];
        if (curr === key) {
            if (mid === letters.length - 1)
                return letters[0];
            return letters[mid + 1];
        }
        if (curr < key)
            start = mid + 1;
        else
            end = mid - 1;
    }
    // If start is out of bounds, then we can return first letter
    return letters[start] || letters[0];
};
exports.default = () => {
    let arr1 = ['a', 'c', 'f', 'h'], key1 = 'f';
    let arr2 = ['a', 'c', 'f', 'h'], key2 = 'b';
    let arr3 = ['a', 'c', 'f', 'h'], key3 = 'm';
    let arr4 = ['a', 'c', 'f', 'g'], key4 = 'h';
    console.log(nextLetter(arr1, key1));
    console.log(nextLetter(arr2, key2));
    console.log(nextLetter(arr3, key3));
    console.log(nextLetter(arr4, key4));
};
