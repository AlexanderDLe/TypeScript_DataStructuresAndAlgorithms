"use strict";
/**
 *  1047. Remove All Adjacent Duplicates in String
 *
 *
 * a b b b a c a    <--- We can keep 1 b here
 *
 * [c a]
 *
 * Stack:
 * 1. Iterate through string and add to stack.
 * 2. If current item is same as top of stack. pop.
 * 3. If current item is not the same, then add to stack.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (s) => {
    const stack = [];
    for (let char of s) {
        let top = stack[stack.length - 1] || null;
        if (top && top === char) {
            stack.pop();
            continue;
        }
        stack.push(char);
    }
    return stack.join('');
};
exports.default = () => {
    console.log(removeDuplicates('abbbaca'));
    console.log(removeDuplicates("azxxzy"));
};
