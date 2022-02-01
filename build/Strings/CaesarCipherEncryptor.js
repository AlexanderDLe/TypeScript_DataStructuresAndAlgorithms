"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const caesarCipherEncryptor = (string, key) => {
    key %= 26;
    const shift = (char) => {
        let ascii = char.charCodeAt(0) + key;
        if (ascii >= 123)
            ascii -= 26;
        return String.fromCharCode(ascii);
    };
    let result = '';
    for (let char of string) {
        result += shift(char);
    }
    return result;
};
exports.default = () => {
    const s = "xyz";
    console.log(caesarCipherEncryptor(s, 2));
};
