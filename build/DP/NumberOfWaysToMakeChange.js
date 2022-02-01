"use strict";
/**
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const numberOfWaysToMakeChange = (n, denoms) => {
    const DP = new Array(n + 1).fill(0);
    DP[0] = 1;
    for (let coin of denoms) {
        for (let amount = 1; amount < DP.length; amount++) {
            if (coin <= amount) {
                DP[amount] += DP[amount - coin];
            }
        }
    }
    (0, Utilities_1.PrintArray)(DP);
    return DP[n];
};
exports.default = () => {
    let denoms = [1, 5];
    console.log(numberOfWaysToMakeChange(10, denoms));
};
