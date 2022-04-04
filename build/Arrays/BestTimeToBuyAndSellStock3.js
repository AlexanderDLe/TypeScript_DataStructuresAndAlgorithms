"use strict";
/**
 *  123. Best Time to Buy and Sell Stock 3
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxProfit = (prices) => {
    let oneBuyOneSell = 0;
    let twoBuyTwoSell = 0;
    let oneBuy = Infinity;
    let twoBuy = Infinity;
    for (let i = 0; i < prices.length; i++) {
        const p = prices[i];
        oneBuy = Math.min(oneBuy, p);
        oneBuyOneSell = Math.max(oneBuyOneSell, p - oneBuy);
        twoBuy = Math.min(twoBuy, p - oneBuyOneSell);
        twoBuyTwoSell = Math.max(twoBuyTwoSell, p - twoBuy);
    }
    return twoBuyTwoSell;
};
exports.default = () => {
    const prices = [7, 1, 5, 3, 6, 4];
    console.log(maxProfit(prices));
};
