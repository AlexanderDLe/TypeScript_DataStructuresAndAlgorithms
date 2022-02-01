"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const runLengthEncoding = (string) => {
    let result = '';
    let i = 0;
    while (i < string.length) {
        let repeats = 1;
        let char = string[i];
        while (i < string.length && char === string[i + 1]) {
            repeats++;
            i++;
            if (repeats === 10) {
                result += '9' + char;
                repeats = 1;
            }
        }
        result += repeats.toString() + char;
        i++;
    }
    return result;
};
exports.default = () => {
    const s = "AAAAAAAAAAAAABBCCCCDD";
    console.log(runLengthEncoding(s));
};
