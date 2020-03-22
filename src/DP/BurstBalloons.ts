/**
 *  312. Burst Balloons
 */

import ProductOfArrayExceptSelf from '../Arrays/ProductOfArrayExceptSelf';

const maxCoins = (nums: number[]): number => {
    const vals = [1, ...nums, 1];
    const n = nums.length;
    const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));

    for (let window = 1; window <= n; window++) {
        for (let i = 1; i + window <= n + 1; i++) {
            const j = i + window - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k - 1] +
                        vals[i - 1] * vals[k] * vals[j + 1] +
                        dp[k + 1][j]
                );
                console.log(`window: ${window} | i: ${i} | j: ${j} | k: ${k}`);
                console.log(dp);
            }
        }
    }
    return dp[1][n];
};
const maxCoinsB = (nums: number[]): number => {
    let vals = [1, ...nums, 1];
    let n = nums.length;
    let dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));

    for (let window = 1; window <= n; window++) {
        for (let left = 1; left + window - 1 <= n; left++) {
            let right = left + window - 1;
            for (let burst = left; burst <= right; burst++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    dp[left][burst - 1] +
                        vals[left - 1] * vals[burst] * vals[right + 1] +
                        dp[burst + 1][right]
                );
            }
        }
    }

    return dp[1][n];
};
export default () => {
    const nums = [3, 1, 5, 8];
    console.log(maxCoinsB(nums));
};
