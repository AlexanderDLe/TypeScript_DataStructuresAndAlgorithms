"use strict";
/**
 *
 * ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
 *
 * Group by word length
 *
 * {
 *  2: "yo", "oy",
 *  3: "act", "tac", "foo", "cat",
 *  4: "flop", "olfp"
 * }
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const groupAnagrams = (words) => {
    let map = {};
    for (let word of words) {
        let sorted = word.split('').sort().join('');
        if (map[sorted])
            map[sorted].push(word);
        else
            map[sorted] = [word];
    }
    return Object.values(map);
};
exports.default = () => {
    const s = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
    console.log(groupAnagrams(s));
};
