/**
 */

import { PrintObject } from "../utils/Utilities";


const generateDocument = (characters: string, document: string): boolean => {
    let map: any = {};

    for (let char of characters) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of document) {
        if (!map[char]) return false;
        map[char]--;
        if (map[char] < 0) return false;
    }

    return true;
}

export default () => {
    const chars = "Bste!hetsi ogEAxpelrt x ";
    const doc = "AlgoExpert is the Best!";
    console.log(generateDocument(chars, doc));
};
