"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minAdd = (s) => {
    const stack = [];
    let count = 0;
    for (let char of s) {
        if (char === '(')
            stack.push(char);
        else {
            let top = stack[stack.length - 1] || null;
            if (top && top === '(')
                stack.pop();
            else
                count++;
        }
    }
    return stack.length + count;
};
exports.default = () => {
    console.log(minAdd('()('));
    console.log(minAdd('())'));
    console.log(minAdd('((('));
};
