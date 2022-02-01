/**
 * 
 * N = 6
 * [1, 5, 10]
 * 
 *****************************
 * 
 *               0  1  2  3  4  5  6  7  8  9  10
 *  {}          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0]
 *  {1}         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *  {1, 5}      [0, 1, 2, 3, 4, 1, 2, 3, 4, 5,  2]
 *  {1, 5, 10}  [0, 1, 2, 3, 4, 1, 2, 3, 4, 5,  1]
 *        
 * 
 * 
 */

import { PrintArray, PrintObject } from "../utils/Utilities";

const numberOfWaysToMakeChange = (n: number, denoms: number[]): number => {
    if (!n) return 0;
    denoms = denoms.sort((a, b) => a - b);
    const DP = new Array(n + 1).fill(Infinity);
    DP[0] = 0;
    
    for (let coin of denoms) {
        for (let amount = 1; amount < DP.length; amount++) {
            if (coin <= amount) {
                DP[amount] = Math.min(DP[amount], DP[amount - coin] + 1);
            }
        }
    }
    return DP[n] || -1;
}

export default () => {
    let denoms  = [1, 3, 4];
    console.log(numberOfWaysToMakeChange(10, denoms));
};
