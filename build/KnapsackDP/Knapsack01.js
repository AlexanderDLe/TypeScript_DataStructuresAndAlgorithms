"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
let Heap = require('collections/heap');
const solveKnapsackRecursion = (profits, weights, capacity) => {
    let maxProfit = 0;
    let items = [];
    let length = profits.length;
    const dp = [];
    const recurse = (index, currProfit, currWeight, indexes) => {
        if (currWeight > capacity || index === length)
            return;
        recurse(index + 1, currProfit, currWeight, [...indexes]);
        currProfit += profits[index];
        currWeight += weights[index];
        if (currProfit > maxProfit && currWeight <= capacity) {
            maxProfit = currProfit;
            items = [...indexes, index];
        }
        recurse(index + 1, currProfit, currWeight, [...indexes, index]);
    };
    recurse(0, 0, 0, []);
    return { maxProfit, items };
};
const solveKnapsackTopDown = (profits, weights, capacity) => {
    const length = profits.length;
    const DP = [];
    const recurse = (index, currWeight) => {
        if (currWeight >= capacity || index >= length)
            return 0;
        DP[index] = DP[index] || [];
        if (DP[index][currWeight])
            return DP[index][currWeight];
        let profitWithAdd = 0;
        if (weights[index] + currWeight <= capacity) {
            profitWithAdd = profits[index] +
                recurse(index + 1, currWeight + weights[index]);
        }
        let profitWithoutAdd = recurse(index + 1, currWeight);
        DP[index][currWeight] = Math.max(profitWithAdd, profitWithoutAdd);
        return DP[index][currWeight];
    };
    let res = recurse(0, 0);
    (0, Utilities_1.PrintMatrix)(DP);
    return res;
};
const solveKnapsackRef = (profits, weights, capacity) => {
    const length = profits.length;
    if (capacity <= 0 || length === 0 || weights.length !== length)
        return 0;
    const DP = Array(profits.length)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));
    // Populate the capacity = 0 columns; with "0" capacity we have "0" profit
    for (let i = 0; i < length; i++)
        DP[i][0] = 0;
    // If we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c)
            DP[0][c] = profits[0];
    }
    // Process all sub-arrays for all the capacities
    for (let i = 1; i < length; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0;
            let profit2 = 0;
            // Include the item, if it is not more than the capacity
            if (weights[i] <= c)
                profit1 = profits[i] + DP[i - 1][c - weights[i]];
            // Exclude the item
            profit2 = DP[i - 1][c];
            // Take maximum
            DP[i][c] = Math.max(profit1, profit2);
        }
    }
    (0, Utilities_1.PrintMatrix)(DP);
    return DP[length - 1][capacity];
};
const solveKnapsack = (profits, weights, capacity) => {
    let len = profits.length;
    let DP = new Array(len).fill([]).map(() => Array(capacity + 1).fill(0));
    for (let c = 1; c <= capacity; c++) {
        if (weights[0] <= c)
            DP[0][c] = profits[0];
    }
    for (let i = 1; i < len; i++) {
        let currWeight = weights[i];
        let currProfit = profits[i];
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0;
            if (currWeight <= c) {
                profit1 = currProfit + DP[i - 1][c - currWeight];
            }
            let profit2 = DP[i - 1][c];
            DP[i][c] = Math.max(profit1, profit2);
        }
    }
    (0, Utilities_1.PrintMatrix)(DP);
    return DP[len - 1][capacity];
};
exports.default = () => {
    let profits = [1, 6, 10, 16];
    let weights = [1, 2, 3, 5];
    console.log(solveKnapsackTopDown(profits, weights, 7));
    // console.log(solveKnapsack(profits, weights, 6));
};
