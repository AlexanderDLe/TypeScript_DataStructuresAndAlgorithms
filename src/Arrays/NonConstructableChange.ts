/**
 * Algo Expert
 * 
 * Given an array of positive integers representing the values of 
 * coins in your possession, write a function that returns the minimum
 * amount of change (the min sum of money) that you cannot create.
 * 
 * For ex. if you're given [1,2,5], the min change you can't create is 4.
 * You can give 
 * 
 * 1
 * 2
 * 3 (1 + 2)
 * 5
 * 6 (5 + 1)
 * 
 * etc.
 */
import { PrintArray, PrintObject } from '../utils/Utilities';

const nonConstructableChange = (coins:number[]): number => {
    coins = coins.sort((a, b) => a - b);
    let sum = 0;

    for (let coin of coins) {

        if (coin > sum + 1) return sum + 1;
        sum += coin;
    }

    return sum + 1;
}

export default () => {
    let coins1 = [5, 7, 1, 1, 2, 3, 22];
    let coins2 = [1, 2, 5];
    let sortd = [1, 1, 2, 3, 5, 7, 22];
    console.log(nonConstructableChange(coins2));
};
