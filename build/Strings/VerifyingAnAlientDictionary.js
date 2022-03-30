"use strict";
/**
 * 953. Verifying an Alient Dictionary
 *
 *
 * "word"
 *     ^
 * "world"
 *     ^
 *
 * "row"
 */
Object.defineProperty(exports, "__esModule", { value: true });
const minFlips = (words, order) => {
    const map = {};
    for (let i = 0; i < order.length; i++)
        map[order[i]] = i;
    for (let i = 1; i < words.length; i++) {
        let prev = words[i - 1];
        let curr = words[i];
        let wordIndex = 0;
        while (wordIndex < prev.length && wordIndex < curr.length) {
            let prevChar = prev[wordIndex];
            let currChar = curr[wordIndex];
            // Mistake: increment wordIndex after usage - not after the possibility of "continue"
            // otherwise function will be stuck in infinite loop.
            wordIndex++;
            if (prevChar === currChar)
                continue;
            if (map[prevChar] > map[currChar])
                return false;
            if (map[prevChar] < map[currChar])
                break;
        }
        // Mistake: Don't forget to account for constraints
        if (prev.length > curr.length && prev.includes(curr))
            return false;
    }
    return true;
};
exports.default = () => {
    console.log(minFlips(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
    console.log(minFlips(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));
    console.log(minFlips(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
};
