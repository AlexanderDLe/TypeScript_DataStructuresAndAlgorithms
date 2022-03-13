"use strict";
/**
 * 91. Decode Ways
 *
 *
 *                              V
 *                             2222              <-- At every decision, we either
 *                     B               V-22          make a char with 1 num or 2 nums (if possible).
 *
 *              BB      BV
 *
 *          BBB   BBV   BVB
 *                +1
 *    BBBB  BBB!
 *     +1    +0
 *
 * 1. At every point in decision tree,
 *    we can either make a letter with 1 num or 2 nums.
 *
 * 2. If a number combo is valid recurse at next index.
 *    If a number combo is invalid, end branch.
 *
 * 3. Exceptions - If num === 0, then invalid. if 0X, then invalid.
 *
 * 4. Base Case: If index reaches s length, then return 1.
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const decode = (s) => {
    let DP = new Map();
    const isCharValid = (start, end) => {
        if (end > s.length)
            return false;
        if (s[start] === '0')
            return false;
        let num = Number(s.substring(start, end));
        if (num > 26)
            return false;
        return true;
    };
    const recurse = (index) => {
        if (index === s.length)
            return 1;
        if (DP.has(index))
            return DP.get(index);
        let count = 0;
        if (isCharValid(index, index + 1))
            count += recurse(index + 1);
        if (isCharValid(index, index + 2))
            count += recurse(index + 2);
        DP.set(index, count);
        return count;
    };
    return recurse(0);
};
exports.default = () => {
    const t = '1';
    const s = '226';
    console.log(decode(s));
};
