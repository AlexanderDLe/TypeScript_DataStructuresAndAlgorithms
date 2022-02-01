"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productSum = (array, depth = 1) => {
    let sum = 0;
    for (let item of array) {
        if (Array.isArray(item)) {
            sum += productSum(item, depth + 1);
        }
        else {
            sum += item;
        }
    }
    return sum * depth;
};
exports.default = () => {
    const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    console.log(productSum(array));
};
