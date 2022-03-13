"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const coinChangeA = (coins, amount) => {
    let DP = new Array(amount + 1).fill(amount);
    DP[0] = 0;
    (0, Utilities_1.PrintArray)(DP);
    for (let i = 1; i < DP.length; i++) {
        for (let coin of coins) {
            if (coin <= i)
                DP[i] = Math.min(DP[i], DP[i - coin] + 1);
        }
        (0, Utilities_1.PrintArray)(DP);
    }
    (0, Utilities_1.PrintArray)(DP);
    return DP[amount] > amount ? -1 : DP[amount];
};
/*
  Array method
0  1  2  3  4  5  6  7  8  9 10 11
0 11 11 11 11 11 11 11 11 11 11 11
*/
const coinChange = (coins, amount) => {
    const DP = new Array(amount + 1).fill(amount + 1);
    DP[0] = 0;
    (0, Utilities_1.PrintArray)(DP);
    for (let col = 1; col <= amount; col++) {
        for (let coin of coins) {
            if (coin <= col)
                DP[col] = Math.min(DP[col], DP[col - coin] + 1);
        }
        (0, Utilities_1.PrintArray)(DP);
    }
    (0, Utilities_1.PrintArray)(DP);
    return DP[amount] > amount ? -1 : DP[amount];
};
exports.default = () => {
    const coins = [5];
    const amount = 11;
    console.log(coinChange(coins, amount));
};
