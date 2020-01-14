/**
 * 338. Counting Bits
 */

import { PrintArray } from '../utils/Utilities';

const countBits = (num: number): number[] => {
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
    PrintArray(countBits(5));
};
