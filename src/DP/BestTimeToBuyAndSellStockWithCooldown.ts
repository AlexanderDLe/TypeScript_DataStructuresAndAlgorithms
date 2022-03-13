/**
 * 309. Best Time to Buy and Sell Stock With Cooldown
 * https://www.youtube.com/watch?v=4wNXkhAky3s
 */

import { PrintArray } from '../utils/Utilities';

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
const maxProfitA = (prices: number[]): number => {
  if (prices.length < 2) return 0;
  let noStock = 0;
  let inHand = -prices[0];
  let sold = 0;

  for (let i = 1; i < prices.length; i++) {
    inHand = Math.max(inHand, noStock - prices[i]);
    noStock = Math.max(noStock, sold);
    sold = Math.max(sold, inHand + prices[i]);
  }

  return sold;
}

const maxProfitB = (prices: number[]): number => {
  const DP = new Map();
  
  const DFS = (index:number, buying:boolean): number => {
  let curr = `${index}-${buying}`;
  if (DP.has(curr)) return DP.get(curr)
  if (index >= prices.length) return 0;

  let exchange;
  let cooldown;
  
  cooldown = DFS(index + 1, buying);
  if (buying) exchange = DFS(index + 1, false) - prices[index];
  else    exchange = DFS(index + 2, true) + prices[index];
  
  DP.set(curr, Math.max(exchange, cooldown));
  return DP.get(curr);
  }

  return DFS(0, true);
}

const maxProfit = (prices: number[]): number => {
  const DP: any = {};

  const DFS = (index:number, buy:boolean) => {
    DP[index] = DP[index] || {};
    
    if (DP[index][`${buy}`]) return DP[index][`${buy}`];
    if (index >= prices.length) return 0;
    
    let exchange = -Infinity;
    let cooldown = DFS(index + 1, buy);
    if (buy) exchange = DFS(index + 1, !buy) - prices[index];
    if (!buy) exchange = DFS(index + 2, !buy) + prices[index];

    DP[index][`${buy}`] = Math.max(exchange, cooldown);
    return DP[index][`${buy}`];
  }

  return DFS(0, true);
}

export default () => {
  const prices = [1,2,4];
  const prices2 = [6,1,3,2,4,7];
  console.log(maxProfit(prices));
  console.log(maxProfit(prices2));
};
