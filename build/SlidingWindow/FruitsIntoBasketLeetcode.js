"use strict";
/**
 *
 * 904. Fruit Into Baskets
 *
 * [2, 1, 1, 0, 1, 2, 2, 1, 1]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const FruitsIntoBasketLeetcode = (arr) => {
    let maxFruits = 0;
    let fruitType = 0;
    let fruitMap = {};
    let L = 0;
    for (let R = 0; R < arr.length; R++) {
        let Rfruit = arr[R];
        if (fruitMap[Rfruit])
            fruitMap[Rfruit]++;
        else {
            fruitType++;
            fruitMap[Rfruit] = 1;
        }
        while (L < R && fruitType > 2) {
            let Lfruit = arr[L];
            fruitMap[Lfruit]--;
            if (!fruitMap[Lfruit])
                fruitType--;
            L++;
        }
        maxFruits = Math.max(maxFruits, R - L + 1);
    }
    return maxFruits;
};
exports.default = () => {
    console.log(FruitsIntoBasketLeetcode([1, 2, 1]));
    console.log(FruitsIntoBasketLeetcode([0, 1, 2, 2]));
    console.log(FruitsIntoBasketLeetcode([1, 2, 3, 2, 2]));
};
