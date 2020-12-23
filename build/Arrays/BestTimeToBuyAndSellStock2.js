"use strict";
/**
 *  122. Best Time To Buy And Sell Stock II
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxProfit = (prices) => {
    let total = 0;
    for (let i = prices.length - 1; i > 0; i--) {
        total += Math.max(0, prices[i] - prices[i - 1]);
    }
    return total;
};
const maxProfitOld = (prices) => {
    let profit = 0;
    let curr = prices[prices.length - 1];
    for (let i = prices.length - 2; i >= 0; i--) {
        if (curr > prices[i]) {
            profit += curr - prices[i];
        }
        curr = prices[i];
    }
    return profit;
};
exports.default = () => {
    const prices = [7, 1, 5, 3, 6, 4];
    console.log(maxProfit(prices));
};
