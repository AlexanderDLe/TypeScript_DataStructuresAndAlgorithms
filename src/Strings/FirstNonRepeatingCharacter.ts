/**
 */

import { PrintObject } from "../utils/Utilities";


const firstNonRepeatingCharacter = (string: string): number => {
    const map: any = {};

    for (let char of string) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (map[char] === 1) return i;
    }

    return -1;
}

export default () => {
    const chars = "aabb";
    console.log(firstNonRepeatingCharacter(chars));
};
