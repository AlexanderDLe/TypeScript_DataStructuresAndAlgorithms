/**
 *  322. Coin Change
 *
 * DP Bottom-Up Approach:
 *
 * Create DP Array, which will hold the minimal possible
 * coins required to achieve each corresponding array entry.
 *
 * (Array will be initialized with amount + 1 as a maximal placeholder)
 *
 * Keep finding minimal required coins up until you reach AMOUNT.
 * If amount is not reachable (i.e. entry is still amount + 1), then return -1,
 * otherwise return the minimal coins value.
 */

import { PrintArray } from '../utils/Utilities';

const coinChange = (coins: number[], amount: number): number => {
    let DP: number[] = new Array(amount + 1).fill(amount + 1);
    DP[0] = 0;

    for (let i = 1; i < DP.length; i++) {
        for (let coin of coins) {
            if (coin <= i) DP[i] = Math.min(DP[i], DP[i - coin] + 1);
        }
    }

    return DP[amount] > amount ? -1 : DP[amount];
};

export default () => {
    const coins = [3];
    const amount = 11;
    console.log(coinChange(coins, amount));
};
