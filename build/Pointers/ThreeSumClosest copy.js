"use strict";
/**
 * 16. 3Sum Closest
*/
Object.defineProperty(exports, "__esModule", { value: true });
const threeSumClosest = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    let minDistance = Infinity;
    let minSum = Infinity;
    for (let L = 0; L < nums.length - 2; L++) {
        let M = L + 1;
        let R = nums.length - 1;
        while (M < R) {
            let sum = nums[L] + nums[M] + nums[R];
            let distance = Math.abs(sum - target);
            if (distance < minDistance) {
                minDistance = distance;
                minSum = sum;
            }
            if (sum === target)
                return sum;
            if (sum < target) {
                M++;
            }
            else {
                R--;
            }
        }
    }
    return minSum;
};
exports.default = () => {
    console.log(threeSumClosest([-1, 2, 1, -4], 1));
};
