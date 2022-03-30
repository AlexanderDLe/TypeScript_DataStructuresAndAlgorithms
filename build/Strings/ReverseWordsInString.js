"use strict";
/**
 * 151. Reverse Words in a String
 */
Object.defineProperty(exports, "__esModule", { value: true });
const reverseWordsInStringA = (string) => {
    let result = [];
    let word = [];
    for (let i = string.length - 1; i >= 0; i--) {
        let char = string[i];
        if (!word.length) {
            word.unshift(char);
            continue;
        }
        let transitioning = (char !== ' ' && word[0] === ' ')
            || (char === ' ' && word[0] !== ' ');
        if (transitioning) {
            result.push(word.join(''));
            word = [];
        }
        word.unshift(char);
    }
    result.push(word.join(''));
    return result.join('');
};
const reverseWordsInStringB = (string) => {
    let result = [];
    let i = string.length - 1;
    while (i >= 0) {
        let char = string[i];
        let end = i;
        if (char !== ' ') {
            while (i > 0 && string[i - 1] !== ' ')
                i--;
            result.push(string.substring(i, end + 1));
        }
        if (char === ' ') {
            while (i > 0 && string[i - 1] === ' ')
                i--;
            result.push(string.substring(i, end + 1));
        }
        i--;
    }
    return result.join('');
};
const reverseWordsInString = (str) => {
    let trimmed = str.trim();
    trimmed = trimmed.replace(/\s+/g, ' ');
    return trimmed.split(' ').reverse().join(' ');
};
exports.default = () => {
    const s = "AlgoExpert is the  best!";
    console.log(reverseWordsInString(s));
    console.log(reverseWordsInString("the sky is blue"));
    console.log(reverseWordsInString("  hello world  "));
    console.log(reverseWordsInString("a good   example"));
};
