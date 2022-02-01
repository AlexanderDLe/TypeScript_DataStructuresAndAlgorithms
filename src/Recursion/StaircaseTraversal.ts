/**
 * 
 * 3 steps: 1, 2, and 3
 * 
 *  0  1  2  3  4  5  6  7
 * [1, 1, 2, 4]
 * 
 */

import { PrintArray } from '../utils/Utilities';


const staircaseTraversal = (height: number, maxSteps: number): number => {
    const DP: number[] = [];
    DP[0] = 1;
    DP[1] = 1;

    for (let i = 2; i <= height; i++) {
        let sum = 0;
        for (let j = i - 1; j >= i - maxSteps; j--) {
            sum += DP[j];

            if (j === 0) break;
        }
        DP[i] = sum;
    }

    return DP[height];
}

export default () => {
    console.log(staircaseTraversal(4, 3));
};
