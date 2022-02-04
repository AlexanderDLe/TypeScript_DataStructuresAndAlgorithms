/**
 */

import { PrintArray } from "../utils/Utilities";

const minimumCharacterForWords = (words: string[]): string[] => {
    let masterMap: any = {};
    
    for (let word of words) {
        let wordMap: any = {};

        for (let letter of word) {
            wordMap[letter] = (wordMap[letter] || 0) + 1;

            if (!masterMap[letter]) masterMap[letter] = 1;
            else masterMap[letter] = Math.max(masterMap[letter], wordMap[letter]);
        }
    }

    const result: string[] = [];
    for (let key in masterMap) {
        let n = masterMap[key];
        while (n) {
            result.push(key);
            n--;
        }
    }

    return result;
}

export default () => {
    const words = ["this", "that", "did", "deed", "them!", "a"];
    PrintArray(minimumCharacterForWords(words));
};
