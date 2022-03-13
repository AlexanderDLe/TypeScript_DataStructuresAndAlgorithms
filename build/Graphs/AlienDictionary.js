"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 269. Alien Dictionary
*/
const alienDictionaryRef = (words) => {
    const inDegrees = {};
    const parents = {};
    const sourceMap = new Set();
    // Mistake: add all chars to sourceMap first to account for all characters
    for (let word of words) {
        for (let char of word) {
            sourceMap.add(char);
        }
    }
    const charCount = sourceMap.size;
    for (let i = 0; i < words.length - 1; i++) {
        let curr = words[i];
        let next = words[i + 1];
        //Mistake: Use .substring to check for prefix - NOT .includes
        if (next.length < curr.length && curr.substring(0, next.length) === next)
            return '';
        let C = 0;
        let N = 0;
        while (C < curr.length && N < next.length) {
            let parent = curr[C];
            let child = next[N];
            if (curr[C] === next[N]) {
                C++, N++;
                continue;
            }
            if (sourceMap.has(child))
                sourceMap.delete(child);
            inDegrees[child] = (inDegrees[child] || 0) + 1;
            if (!parents[parent])
                parents[parent] = [];
            parents[parent].push(child);
            break;
        }
    }
    const queue = Array.from(sourceMap);
    const visited = new Set();
    let result = '';
    while (queue.length) {
        let letter = queue.shift();
        result += letter;
        if (visited.has(letter))
            return '';
        visited.add(letter);
        let childrenLetters = parents[letter];
        if (!childrenLetters)
            continue;
        for (let child of childrenLetters) {
            inDegrees[child]--;
            if (!inDegrees[child])
                queue.push(child);
        }
    }
    // Mistake: Check if result accounts for all chars before returning.
    return result.length === charCount ? result : '';
};
const alienDictionary = (words) => {
    const inDegrees = {};
    const parents = {};
    const sourceSet = new Set();
    for (let word of words) {
        for (let char of word) {
            sourceSet.add(char);
        }
    }
    const charCount = sourceSet.size;
    const isPrefix = (curr, next) => {
        if (curr.length > next.length && curr.substring(0, next.length) === next)
            return true;
        return false;
    };
    for (let i = 0; i < words.length - 1; i++) {
        let curr = words[i];
        let next = words[i + 1];
        if (isPrefix(curr, next))
            return '';
        let C = 0;
        let N = 0;
        while (C < curr.length && N < next.length) {
            let parent = curr[C];
            let child = next[N];
            if (parent === child) {
                C++, N++;
                continue;
            }
            inDegrees[child] = (inDegrees[child] || 0) + 1;
            if (!parents[parent])
                parents[parent] = [];
            parents[parent].push(child);
            if (sourceSet.has(child))
                sourceSet.delete(child);
            break;
        }
    }
    const queue = Array.from(sourceSet);
    const visited = new Set();
    let result = '';
    while (queue.length) {
        let letter = queue.shift();
        if (visited.has(letter))
            return '';
        visited.add(letter);
        result += letter;
        let childrenLetters = parents[letter];
        if (!childrenLetters)
            continue;
        for (let child of childrenLetters) {
            inDegrees[child]--;
            if (!inDegrees[child])
                queue.push(child);
        }
    }
    return result.length === charCount ? result : '';
};
exports.default = () => {
    console.log(alienDictionary(["wrt", "wrf", "er", "ett", "rftt"]));
    console.log(alienDictionary(["z", "x"]));
    console.log(alienDictionary(["z", "x", "z"]));
    console.log(alienDictionary(["z", "z"]));
    console.log(alienDictionary(["y", "ad"]));
    console.log(alienDictionary(["ab", "adc"]));
    console.log(alienDictionary(["abc", "ab"]));
    console.log(alienDictionary(["ac", "ab", "b"]));
    console.log(alienDictionary(["z", "x", "a", "zb", "zx"]));
};
