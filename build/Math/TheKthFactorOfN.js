"use strict";
/**
 *  1492. The Kth Factor of N
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const kthFactorSlow = (n, k) => {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0)
            factors.push(i);
    }
    (0, Utilities_1.PrintArray)(factors);
    return factors[k - 1] ? factors[k - 1] : -1;
};
const kthFactor = (n, k) => {
    const root = Math.sqrt(n);
    console.log(root);
    for (let i = 1; i < root; i++) {
        console.log(k);
        if (n % i === 0 && --k === 0)
            return i;
    }
    for (let i = root; i > 0; i--) {
        if (n % i === 0 && --k === 0)
            return n / i;
    }
    return -1;
};
exports.default = () => {
    console.log(kthFactor(12, 3));
};
