"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smallestDifference = (arrayOne, arrayTwo) => {
    arrayOne = arrayOne.sort((a, b) => a - b);
    arrayTwo = arrayTwo.sort((a, b) => a - b);
    let p = 0;
    let q = 0;
    let result = [];
    let lowestDiff = Infinity;
    while (p < arrayOne.length && q < arrayTwo.length) {
        let pVal = arrayOne[p];
        let qVal = arrayTwo[q];
        let diff = Math.abs(pVal - qVal);
        if (diff < lowestDiff) {
            lowestDiff = diff;
            result = [pVal, qVal];
        }
        if (pVal <= qVal)
            p++;
        else
            q++;
    }
    return result;
};
exports.default = () => {
    let arr1 = [-1, 5, 10, 20, 28, 3];
    let arr2 = [26, 134, 135, 15, 17];
    // let arr1 = [-1, 75, 50, 25, 48, 3];
    // let arr2 = [26, 134, 135, 15, 17];
    console.log(smallestDifference(arr1, arr2));
};
