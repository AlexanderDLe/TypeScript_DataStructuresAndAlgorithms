/**
 *  122. Best Time To Buy And Sell Stock II
 */

const maxProfit = (prices: number[]): number => {
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

export default () => {
    const prices = [7, 1, 5, 3, 6, 4];
    console.log(maxProfit(prices));
};
