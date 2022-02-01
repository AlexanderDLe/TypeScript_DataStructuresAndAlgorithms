/**
 * 
 * 
 */

import { PrintArray, PrintObject } from "../utils/Utilities";

const numberOfWaysToMakeChange = (n: number, denoms: number[]): number => {
    const DP = new Array(n + 1).fill(0);
    DP[0] = 1;
    
    for (let coin of denoms) {
        for (let amount = 1; amount < DP.length; amount++) {
            if (coin <= amount) {
                DP[amount] += DP[amount - coin];
            }
        }
    }
    PrintArray(DP)
    return DP[n];
}

export default () => {
    let denoms  = [1, 5];
    console.log(numberOfWaysToMakeChange(10, denoms));
};
