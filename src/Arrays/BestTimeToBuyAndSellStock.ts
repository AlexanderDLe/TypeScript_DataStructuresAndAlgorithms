/**
 * 121. Best Time To Buy And Sell Stock
 * Iterate through array, constantly update min value
 * and update max if price - min is greater.
 */

const maxProfit = (prices: number[]): number => {
    let min = Number.MAX_VALUE;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

export default () => {
    const prices = [7, 1, 5, 3, 6, 4];
    console.log(maxProfit(prices));
};
