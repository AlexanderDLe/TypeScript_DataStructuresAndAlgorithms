"use strict";
/**
 * Grokking the Coding Interview
 *
 * Any number will be called a happy number if, after repeatedly
 * replacing it with a number equal to the sum of the square of
 * all of its digits, leads us to number ‘1’. All other (not-happy)
 * numbers will never reach ‘1’. Instead, they will be stuck in a
 * cycle of numbers which does not include ‘1’.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const happyNumberWithSet = (num) => {
    let set = new Set();
    while (num !== 1) {
        if (set.has(num))
            return false;
        set.add(num);
        let sum = 0;
        while (num > 0) {
            let onesVal = num % 10;
            sum += onesVal * onesVal;
            num = Math.floor(num / 10);
        }
        console.log(sum);
        num = sum;
    }
    return true;
};
const happyNumber2Pointers = (num) => {
    let s = num;
    let f = num;
    let process = (num) => {
        let sum = 0;
        while (num > 0) {
            let val = num % 10;
            sum += val * val;
            num = Math.floor(num / 10);
        }
        return sum;
    };
    while (true) {
        s = process(s);
        f = process(process(f));
        if (s === f)
            break;
    }
    return s === 1;
};
exports.default = () => {
    console.log(happyNumber2Pointers(23));
    console.log(happyNumber2Pointers(12));
};
