"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const balancedBrackets = (string) => {
    const opens = new Set(['(', '[', '{']);
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    for (let char of string) {
        if (!opens.has(char) && !(char in map))
            continue;
        if (opens.has(char)) {
            stack.push(char);
            continue;
        }
        if (!stack.length)
            return false;
        let top = stack[stack.length - 1];
        if (top !== map[char])
            return false;
        else
            stack.pop();
    }
    return stack.length === 0;
};
exports.default = () => {
    let string = "([])(){}(())()()";
    console.log(balancedBrackets(string));
};
