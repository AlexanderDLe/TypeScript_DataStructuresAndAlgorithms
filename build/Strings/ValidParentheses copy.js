"use strict";
/**
 * 20. Valid Parentheses
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isValid = (s) => {
    const stack = [];
    const map = { '(': ')', '{': '}', '[': ']' };
    for (let c of s) {
        if (map[c])
            stack.push(c);
        else if (map[stack.pop()] !== c)
            return false;
    }
    return stack.length ? false : true;
};
exports.default = () => {
    const s1 = '[';
    const s2 = '{[]}';
    const s3 = '()[]{}';
    if (isValid(s1))
        console.log('True');
    else
        console.log('False');
};
