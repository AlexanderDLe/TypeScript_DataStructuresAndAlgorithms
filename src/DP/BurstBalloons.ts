/**
 *  312. Burst Balloons
 */

import ProductOfArrayExceptSelf from '../Arrays/ProductOfArrayExceptSelf';

const maxCoins = (nums: number[]): number => {
    const vals = [1, ...nums, 1];
    const n = nums.length;
    const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));

    for (let len = 1; len <= n; len++) {
        for (let i = 1; i + len <= n + 1; i++) {
            const j = i + len - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k - 1] +
                        vals[i - 1] * vals[k] * vals[j + 1] +
                        dp[k + 1][j]
                );
                console.log(`len: ${len} | i: ${i} | j: ${j} | k: ${k}`);
                console.log(dp);
            }
        }
    }
    return dp[1][n];
};

export default () => {
    const nums = [3, 1, 5, 8];
    console.log(maxCoins(nums));
};
