/**
 * 49. Group Anagrams
 */

import { PrintMatrix, PrintObject } from '../utils/Utilities';

type Table = {
    [key: string]: string[];
};

const groupAnagramsA = (strs: string[]): string[][] => {
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

const groupAnagrams = (strs: string[]): string[][] => {
    let map: { [key: string]: string[] } = {};

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');

        if (map[sortedStr]) map[sortedStr].push(str);
        else map[sortedStr] = [str];
    }

    return Object.values(map);
}

export default () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    PrintMatrix(groupAnagrams(strs));
};
