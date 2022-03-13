"use strict";
/**
 * 451. Sort Characters By Frequency
*/
Object.defineProperty(exports, "__esModule", { value: true });
const frequencySort = (s) => {
    let map = {};
    for (let char of s)
        map[char] = (map[char] || 0) + 1;
    let arr = Object.entries(map).sort((a, b) => b[1] - a[1]);
    let result = '';
    for (let [char, freq] of arr) {
        result += char.repeat(Number(freq));
    }
    return result;
};
exports.default = () => {
    console.log(frequencySort("tree"));
    console.log(frequencySort("cccaaa"));
};
