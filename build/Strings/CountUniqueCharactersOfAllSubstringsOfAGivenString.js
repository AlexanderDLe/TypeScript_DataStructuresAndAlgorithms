"use strict";
/**
 *  828. Count Unique Characters of All Substrings of a Given String
 */
Object.defineProperty(exports, "__esModule", { value: true });
const countCharsRef = (s) => {
    let map = {};
    let len = s.length;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!map[char])
            map[char] = [];
        map[char].push(i);
    }
    let result = 0;
    for (let key in map) {
        let indexes = map[key];
        for (let i = 0; i < indexes.length; i++) {
            let left = i === 0 ? indexes[i] + 1 : indexes[i] - indexes[i - 1];
            let right = i === indexes.length - 1 ? len - indexes[i] : indexes[i + 1] - indexes[i];
            result += left * right;
        }
    }
    return result;
};
const countChars = (s) => {
    const map = {};
    const len = s.length;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!map[char])
            map[char] = [];
        map[char].push(i);
    }
    for (let key in map) {
        let indexes = map[key];
        for (let i = 0; i < indexes.length; i++) {
            let prev = indexes[i - 1];
            let curr = indexes[i];
            let next = indexes[i + 1];
            let left = i === 0 ? curr + 1 : curr - prev;
            let right = i === indexes.length - 1 ? len - curr : next - curr;
            count += left * right;
        }
    }
    return count;
};
exports.default = () => {
    console.log(countChars('ABC'));
    console.log(countChars('ABA'));
    console.log(countChars('LEETCODE'));
};
