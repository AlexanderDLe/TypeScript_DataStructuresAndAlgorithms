/**
 * 17. Letter Combinations of a Phone Number
 */

import { PrintArray } from '../utils/Utilities';

type PhoneMap = {
    [key: string]: string[] | null;
};

const letterCombinations = (digits: string): string[] => {
    const map: PhoneMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result: string[] = [];

    const recurse = (str: string, index: number): void => {
        if (index === digits.length) {
            if (str.length) result.push(str);
            return;
        }
        if (digits[index] === '1') {
            recurse(str, index + 1);
            return;
        };

        for (let i = 0; i < map[digits[index]].length; i++) {
            recurse(str + map[digits[index]][i], index + 1);
        }
    }
    recurse('', 0);
    console.log(result);
    return result;
}

const letterCombinationsB = (digits: number[]): string[] => {
    if (!digits.length) return [];

    let result: string[] = [];
    const map: PhoneMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    const generate = (index: number): void => {
        if (index === digits.length) return;
        if (!map[digits[index]]) return generate(index + 1);
        if (!result.length) {
            result = [...map[digits[index]]];
            return generate(index + 1);
        }

        let len = result.length;
        let newLetters = map[digits[index]];
        for (let i = 0; i < len; i++) {
            let currentCombo = result[i];
            newLetters.forEach((letter: string) =>
                result.push(currentCombo + letter)
            );
        }

        result.splice(0, len);
        generate(index + 1);
    };

    generate(0);
    return result;
};

export default () => {
    const digits = '';
    PrintArray(letterCombinations(digits));
};
