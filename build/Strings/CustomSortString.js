"use strict";
/**
 *  791. Custom Sort String
 */
Object.defineProperty(exports, "__esModule", { value: true });
const customSort = (order, s) => {
    let map = {};
    for (let char of s)
        map[char] = (map[char] || 0) + 1;
    let result = '';
    for (let char of order) {
        if (char in map) {
            result += char.repeat(map[char]);
            delete map[char];
        }
    }
    for (let leftoverChar in map) {
        result += leftoverChar.repeat(map[leftoverChar]);
    }
    return result;
};
exports.default = () => {
    console.log(customSort("cba", "abcd"));
    console.log(customSort("cbafg", "abcd"));
};
