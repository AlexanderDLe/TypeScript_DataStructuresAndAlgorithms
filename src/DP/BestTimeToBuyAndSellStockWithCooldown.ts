/**
 * 309. Best Time to Buy and Sell Stock With Cooldown
 */

const maxProfitA = (prices: number[]): number => {
    let buy = Number.MIN_SAFE_INTEGER;
    let prev = 0;
    let sell = 0;

    for (let price of prices) {
        buy = Math.max(buy, prev - price);
        prev = Math.max(prev, sell);
        sell = Math.max(sell, buy + price);
    }

    return sell;
};
const maxProfit = (prices: number[]): number => {
    if (prices.length < 2) return 0;

    let has1_doNothing = -prices[0];
    let has1_sell = 0;
    let has0_doNothing = 0;
    let has0_Buy = -prices[0];

    for (let price of prices) {
        has1_doNothing = Math.max(has1_doNothing, has0_Buy);
        has0_Buy = has0_doNothing - price;
        has0_doNothing = Math.max(has0_doNothing, has1_sell);
        has1_sell = has1_doNothing + price;
    }

    return Math.max(has0_doNothing, has1_sell);
};

export default () => {
    const prices = [1, 2, 3, 0, 2];
    console.log(maxProfit(prices));
};
