"use strict";
/**
 * 926. Flip String to Monotone Increasing
 *
 * 000110000
 *    ^----- Increment one
 * ones = 1
 * flips = 0
 *
 **********************
 *
 * 000110000
 *     ^----- Increment one again
 * ones = 2
 * flips = 0
 *
 **********************
 *
 * 000110000
 *      ^----- Increment flips
 * ones = 2
 * flips = 1
 *
 **********************
 *
 * 000110000
 *       ^----- Increment flips
 * ones = 2
 * flips = 2
 *
 **********************
 *
 * 000110000
 *        ^----- Increment flips
 * ones = 2
 * flips = 3
 * flips = min(ones, flips) = 2
 *
 **********************
 *
 * 000110001
 *         ^----- Increment ones
 * ones = 3
 * flips = 2
 * flips = min(ones, flips) = 3
 *
 **********************
 *
 * 0001100010
 *          ^----- Increment flips
 * ones = 3
 * flips = 4
 * flips = min(ones, flips) = 3
 *
 * Conceptual Summary:
 *
 ****************************
 *
 * When we process the next "char", we have two choices:
 * 1. If it's '1' - we can simply increment "ones", as it would meet the
 *    requirement of increasing.
 * 2. If it's '0' - we increment flips.
 *
 * Now, we have two options. Either to flip the new zero to one or to flip all previous ones to zeros.
 * Math.min(ones, flips) will make that decision. Taking ones will flip all ones, whereas taking flips
 * will flip all zeroes encountering the one.
 *
 * 0110001101

When we process the first eight bits, flips is 2, which means the optimal solution is to flip the 1s at positions 2 and 3.
Next, we process the ninth bit, which is 0. We have two options:
(1) flip all preceding 1s: the number of preceding 1s is 4 (counter is now 4)
(2) flip this 0: the number of flips increases from 2 to 3.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const minFlips = (s) => {
    if (!s || !s.length)
        return 0;
    let flips = 0;
    let ones = 0;
    for (let char of s) {
        if (char === '1')
            ones++;
        else
            flips++;
        flips = Math.min(ones, flips);
    }
    return flips;
};
exports.default = () => {
    console.log(minFlips("00110"));
    console.log(minFlips("010110"));
    console.log(minFlips("00011000"));
};
