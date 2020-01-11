"use strict";
/**
 * 121. Best Time To Buy And Sell Stock
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxProfit = (prices) => {
    let min = Number.MAX_VALUE;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};
exports.default = () => {
    const prices = [7, 1, 5, 3, 6, 4];
    console.log(maxProfit(prices));
};
