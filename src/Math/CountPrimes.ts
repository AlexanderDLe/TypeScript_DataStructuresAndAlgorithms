/**
 *  204. Count Primes
 */

import { PrintArray } from '../utils/Utilities';

const plusOne = (n: number): number => {
    let count = 0;
    let arr = new Array(n).fill(0);

    for (let i = 2; i < n; i++) {
        if (arr[i]) continue;
        else count++;

        for (let j = i + i; j < n; j += i) {
            arr[j] = 1;
        }
    }
    return count;
};

export default () => {
    let n = 2;
    console.log(plusOne(n))
};
