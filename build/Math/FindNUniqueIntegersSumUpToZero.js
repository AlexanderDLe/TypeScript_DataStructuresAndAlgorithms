"use strict";
/**
 *  1304. Find N Unique Integers Sum Up To Zero
 *
 *  1 = 0
 *  2 = 1, -1
 *  3 = 0, 1, -1
 *  4 = 1, -1, 2, -2
 *  5 = 0, 1, -1, 2, -2
 *
 * If even, you can balance the integers around 0 like so:
 * -1 + 1 === 0
 * -2 + 2 === 0
 * -3 + 3 === 0
 * etc...
 *
 * If odd, you can simply add zero to the array.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sumZero = (n) => {
    const isOdd = n % 2 === 1;
    const result = isOdd ? [0] : [];
    if (isOdd)
        n--;
    let i = 1;
    while (n) {
        result.push(i);
        result.push(-i);
        n -= 2;
        i++;
    }
    return result;
};
exports.default = () => {
    console.log(sumZero(5));
    console.log(sumZero(6));
};
