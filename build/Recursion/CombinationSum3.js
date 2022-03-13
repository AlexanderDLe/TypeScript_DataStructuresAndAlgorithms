"use strict";
/**
 * . Combination Sum 3
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const combinationSum3 = (k, n) => {
    let result = [];
    const recurse = (num, sum, subarr) => {
        if (sum === n && subarr.length === k)
            result.push([...subarr]);
        if (sum >= n || num >= n || subarr.length >= k)
            return;
        for (let i = num + 1; i < n; i++) {
            if (i > 9)
                break;
            subarr.push(i);
            recurse(i, sum + i, subarr);
            subarr.pop();
        }
    };
    recurse(0, 0, []);
    return result;
};
exports.default = () => {
    (0, Utilities_1.PrintMatrix)(combinationSum3(2, 17));
};
