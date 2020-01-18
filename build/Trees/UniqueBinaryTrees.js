"use strict";
/**
 * 96. Unique Binary Trees
 */
Object.defineProperty(exports, "__esModule", { value: true });
const numTrees = (n) => {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let level = 2; level <= n; level++) {
        for (let root = 1; root <= level; root++) {
            dp[level] += dp[level - root] * dp[root - 1];
        }
    }
    return dp[n];
};
exports.default = () => {
    console.log(numTrees(3));
};
