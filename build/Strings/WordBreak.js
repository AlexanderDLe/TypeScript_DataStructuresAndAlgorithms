"use strict";
/**
 * 139. Word Break
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
// Slow Algorithm - Time Exceeded
const wordBreakRecursive = (s, wordDict) => {
    const map = {};
    for (let word of wordDict) {
        if (!(word[0] in map))
            map[word[0]] = [];
        map[word[0]].push(word);
    }
    for (let item in map)
        map[item].sort((a, b) => b.length - a.length);
    let canBreak = false;
    const recurse = (index) => {
        if (index === s.length)
            canBreak = true;
        let words = map[s[index]];
        if (canBreak || !words)
            return;
        for (let word of words) {
            if (word === s.slice(index, index + word.length)) {
                recurse(index + word.length);
            }
        }
    };
    (0, Utilities_1.PrintObject)(map);
    recurse(0);
    return canBreak;
};
// DP Algorithm
const wordBreak = (s, wordDict) => {
    // Initialize DP array
    const f = new Array(s.length + 1).fill(false);
    f[0] = true;
    // Intialize word map
    const map = {};
    for (let word of wordDict) {
        if (!(word[0] in map))
            map[word[0]] = [];
        map[word[0]].push(word);
    }
    // Fill DP array
    for (let i = 0; i < s.length; i++) {
        let words = map[s[i]];
        if (!f[i] || !words)
            continue;
        for (let word of words) {
            if (word === s.slice(i, i + word.length)) {
                f[i + word.length] = true;
            }
        }
    }
    return f[s.length];
};
exports.default = () => {
    const s = 'leetcode';
    const wordDict = ['leet', 'code'];
    console.log(wordBreak(s, wordDict));
};
