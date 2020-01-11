"use strict";
/**
 * 70. Climbing Stairs
 */
Object.defineProperty(exports, "__esModule", { value: true });
const climbStairs = (n) => {
    let result = 0;
    const recurse = (m) => {
        if (!m)
            result++;
        if (m > 1)
            recurse(m - 1);
        if (m > 2)
            recurse(m - 2);
    };
    recurse(n);
    return result;
};
exports.default = () => {
    console.log(climbStairs(4));
};
