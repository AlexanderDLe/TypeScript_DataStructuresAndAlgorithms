"use strict";
/**
 * 309. Best Time to Buy and Sell Stock With Cooldown
 * https://www.youtube.com/watch?v=4wNXkhAky3s
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*  State Machine Analysis

    You have three states:
    
    1. No stock. If you have no stock, your previous position was either:
        a. No stock (still not buying)
        b. Sold
    
    2. In Hand. Your previous position was:
        a. Bought
        b. Holding (still not selling)

    3. Sold. Previous positions:
        a. In Hand + Today's Price
*/
const maxProfit = (prices) => {
    if (prices.length < 2)
        return 0;
    let noStock = 0;
    let inHand = -prices[0];
    let sold = 0;
    for (let i = 1; i < prices.length; i++) {
        inHand = Math.max(inHand, noStock - prices[i]);
        noStock = Math.max(noStock, sold);
        sold = Math.max(sold, inHand + prices[i]);
    }
    return sold;
};
exports.default = () => {
    const prices = [2, 1, 4, 5, 2, 9, 7];
    const prices2 = [6, 1, 3, 2, 4, 7];
    console.log(maxProfit(prices));
    console.log(maxProfit(prices2));
};
