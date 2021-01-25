"use strict";
/**
 *  242. Valid Anagram
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isAnagram = (s, t) => {
    console.log(s.split('').sort());
    console.log(t.split('').sort());
    return s.split('').sort().join() == t.split('').sort().join();
};
const isAnagramOld = (s, t) => {
    if (s.length !== t.length)
        return false;
    let table = {};
    let count = 0;
    for (let c of s) {
        table[c] = (table[c] || 0) + 1;
        count++;
    }
    for (let c of t) {
        if (!table[c])
            return false;
        else {
            table[c]--;
            count--;
        }
    }
    return count === 0 ? true : false;
};
exports.default = () => {
    const s = 'anagram';
    const t = 'nagaram';
    const r = 'nagrana';
    console.log(isAnagram(s, t));
};
