"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const minimumCharacterForWords = (words) => {
    let masterMap = {};
    for (let word of words) {
        let wordMap = {};
        for (let letter of word) {
            wordMap[letter] = (wordMap[letter] || 0) + 1;
            if (!masterMap[letter])
                masterMap[letter] = 1;
            else
                masterMap[letter] = Math.max(masterMap[letter], wordMap[letter]);
        }
    }
    const result = [];
    for (let key in masterMap) {
        let n = masterMap[key];
        while (n) {
            result.push(key);
            n--;
        }
    }
    return result;
};
exports.default = () => {
    const words = ["this", "that", "did", "deed", "them!", "a"];
    (0, Utilities_1.PrintArray)(minimumCharacterForWords(words));
};
