"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValid = (s) => {
    const map = { ')': '(', ']': '[', '}': '{' };
    const stack = [];
    for (let char of s) {
        if (!map[char])
            stack.push(char);
        else if (stack.pop() !== map[char])
            return false;
    }
    return stack.length === 0;
};
exports.default = () => {
    console.log(isValid('()('));
    console.log(isValid('[()[]{}]'));
};
