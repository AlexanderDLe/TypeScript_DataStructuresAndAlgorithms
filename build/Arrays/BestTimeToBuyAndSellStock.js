"use strict";
/**
 * 121. Best Time To Buy And Sell Stock
 * Iterate through array, constantly update min value
 * and update max if (price - min) is greater.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxProfitA = (prices) => {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min)
            min = prices[i];
        result = Math.max(result, prices[i] - min);
    }
    return result;
};
const maxProfitB = (prices) => {
    let min = Number.MAX_VALUE;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};
const maxProfitC = (prices) => {
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            continue;
        }
        max = Math.max(max, prices[i] - min);
    }
    return max;
};
const maxProfit = (prices) => {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        result = Math.max(result, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return result;
};
exports.default = () => {
    const prices = [7, 1, 5, 3, 6, 4];
    console.log(maxProfit(prices));
};
