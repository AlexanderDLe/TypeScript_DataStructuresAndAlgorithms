"use strict";
/**
 * 70. Climbing Stairs
 *
 * DP Approach: Solve subproblems.
 * To get to n, you must have taken a limited
 * number of options to get there.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const climbStairs = (n) => {
    let dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n];
};
const climbStairsDP = (n) => {
    let DP = new Array(n);
    DP[0] = 1;
    DP[1] = 1;
    for (let i = 2; i <= n; i++) {
        DP[i] = DP[i - 1] + DP[i - 2];
    }
    return DP[n];
};
let memo = {};
const climbStairsMemo = (n) => {
    if (n < 2)
        return 1;
    if (memo[n])
        return memo[n];
    else {
        memo[n] = climbStairsMemo(n - 2) + climbStairsMemo(n - 1);
    }
    return memo[n];
};
exports.default = () => {
    // console.log(climbStairsMemo(4));
    // console.log(climbStairsDP(4));
    console.log(climbStairs(4));
};
