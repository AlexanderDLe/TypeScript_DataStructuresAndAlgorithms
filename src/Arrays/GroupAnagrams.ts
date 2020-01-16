/**
 * 49. Group Anagrams
 */

import { PrintMatrix, PrintObject } from '../utils/Utilities';

type Table = {
    [key: string]: string[];
};
const groupAnagrams = (strs: string[]): string[][] => {
    let table: Table = {};
    for (let str of strs) {
        let sortedStr = str
            .split('')
            .sort()
            .join('');

        if (table[sortedStr]) table[sortedStr].push(str);
        else table[sortedStr] = [str];
    }

    return Object.values(table);
};

export default () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    PrintMatrix(groupAnagrams(strs));
};
