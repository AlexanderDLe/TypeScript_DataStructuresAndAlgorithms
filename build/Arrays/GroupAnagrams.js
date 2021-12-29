"use strict";
/**
 * 49. Group Anagrams
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const groupAnagramsA = (strs) => {
    let table = {};
    for (let str of strs) {
        let sortedStr = str
            .split('')
            .sort()
            .join('');
        if (table[sortedStr])
            table[sortedStr].push(str);
        else
            table[sortedStr] = [str];
    }
    return Object.values(table);
};
const groupAnagrams = (strs) => {
    let map = {};
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (map[sortedStr])
            map[sortedStr].push(str);
        else
            map[sortedStr] = [str];
    }
    return Object.values(map);
};
exports.default = () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    (0, Utilities_1.PrintMatrix)(groupAnagrams(strs));
};
