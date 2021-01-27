"use strict";
/**
 *  202. Happy Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isHappy = (n) => {
    const set = new Set([]);
    while (n) {
        if (n === 1)
            return true;
        let sum = 0;
        let str = n.toString();
        for (let digit of str) {
            sum += Math.pow(parseInt(digit), 2);
        }
        if (set.has(sum))
            return false;
        else
            set.add(sum);
        n = sum;
    }
    return false;
};
exports.default = () => {
    console.log(isHappy(19));
};
