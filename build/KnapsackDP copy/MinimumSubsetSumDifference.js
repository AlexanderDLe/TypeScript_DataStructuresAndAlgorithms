"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const minimumSubsetSumDifferenceTopDown = (nums) => {
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    const DP = {};
    const DFS = (index, currSum, outsideSum) => {
        DP[index] = DP[index] || [];
        if (DP[index][currSum])
            return DP[index][currSum];
        if (index === nums.length) {
            let diff = Math.abs(outsideSum - currSum);
            return diff;
        }
        let value = nums[index];
        let withTake = DFS(index + 1, currSum + value, outsideSum - value);
        let withoutTake = DFS(index + 1, currSum, outsideSum);
        DP[index][currSum + value] = Math.min(withTake, withoutTake);
        return DP[index][currSum + value];
    };
    return DFS(0, 0, totalSum);
};
const minimumSubsetSumDifferenceBotUp = (nums) => {
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    let halfSum = Math.floor(totalSum / 2);
    let DP = new Array(nums.length)
        .fill(0)
        .map(() => new Array(halfSum + 1).fill(0));
    DP.forEach(row => row[0] = 1);
    for (let colSum = 1; colSum < DP[0].length; colSum++) {
        if (nums[0] === colSum)
            DP[0][colSum] = 1;
    }
    let result = Infinity;
    for (let row = 1; row < DP.length; row++) {
        for (let colSum = 1; colSum < DP[0].length; colSum++) {
            if (DP[row - 1][colSum]) {
                DP[row][colSum] = 1;
                continue;
            }
            let newSetValue = nums[row];
            if (DP[row - 1][colSum - newSetValue]) {
                DP[row][colSum] = 1;
                let outsideSum = totalSum - colSum;
                let diff = Math.abs(outsideSum - colSum);
                result = Math.min(diff);
            }
        }
    }
    // PrintMatrix(DP);
    return result;
};
exports.default = () => {
    console.log(minimumSubsetSumDifferenceBotUp([1, 2, 3, 9]));
    console.log(minimumSubsetSumDifferenceBotUp([1, 2, 7, 1, 5]));
    console.log(minimumSubsetSumDifferenceBotUp([1, 3, 100, 4]));
};
