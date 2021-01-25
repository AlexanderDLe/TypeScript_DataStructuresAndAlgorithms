/**
 * 338. Counting Bits
 */

import { PrintArray } from '../utils/Utilities';

const countBits = (num: number): number[] => {
    let result: number[] = [];
    result.push(0);

    for (let i = 0; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
        console.log(i.toString(2) + ' r[i >> 1]: ' + result[i >> 1] + ' and (i & 1): ' + (i & 1) + ' total: ' + result[i]);
    }

    return result;
}

const countBitsOld = (num: number): number[] => {
    let result: number[] = [];

    for (let i = 0; i <= num; i++) {
        let count = 0;
        let copy = i;

        while (copy) {
            count += copy & 1;
            copy = copy >> 1;
        }
        result.push(count);
    }

    return result;
};

export default () => {
    PrintArray(countBits(10));
};
