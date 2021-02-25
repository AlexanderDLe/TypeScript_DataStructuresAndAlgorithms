/**
 * Pramp - Array Quadruplet
 */

import { PrintArray } from '../utils/Utilities';

const findArrayQuadruplet = (arr: number[], s: number): number[] => {
    if (arr.length < 4) return [];
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 2; j++) {
            let leftSum = arr[i] + arr[j];
            let L = j + 1;
            let R = arr.length - 1;

            while (L < R) {
                let rightSum = arr[L] + arr[R];
                let totalSum = leftSum + rightSum;
                if (totalSum === s) return [arr[i], arr[j], arr[L], arr[R]];
                if (totalSum < s) L++;
                if (totalSum > s) R--;
            }
        }
    }

    return [];
};

export default () => {
    const arr = [1,2,3,4,5,9,19,12,12,19]
    const s = 40;
    PrintArray(findArrayQuadruplet(arr, s));
};
