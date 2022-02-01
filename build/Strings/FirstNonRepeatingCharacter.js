"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const firstNonRepeatingCharacter = (string) => {
    const map = {};
    for (let char of string) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (map[char] === 1)
            return i;
    }
    return -1;
};
exports.default = () => {
    const chars = "aabb";
    console.log(firstNonRepeatingCharacter(chars));
};
