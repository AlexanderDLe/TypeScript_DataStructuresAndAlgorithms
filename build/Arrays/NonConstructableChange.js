"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nonConstructableChange = (coins) => {
    coins = coins.sort((a, b) => a - b);
    let sum = 0;
    for (let coin of coins) {
        if (coin > sum + 1)
            return sum + 1;
        sum += coin;
    }
    return sum + 1;
};
exports.default = () => {
    let coins1 = [5, 7, 1, 1, 2, 3, 22];
    let coins2 = [1, 2, 5];
    let sortd = [1, 1, 2, 3, 5, 7, 22];
    console.log(nonConstructableChange(coins2));
};
