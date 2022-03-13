"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 654. Maximum Binary Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const construct = (nums) => {
    const getMaxIndex = (L, R) => {
        let maxIndex = 0;
        let maxVal = -Infinity;
        for (let i = L; i <= R; i++) {
            let num = nums[i];
            if (num > maxVal) {
                maxVal = num;
                maxIndex = i;
            }
        }
        return maxIndex;
    };
    const build = (L, R) => {
        if (L > R)
            return null;
        const indexOfMax = getMaxIndex(L, R);
        const numOfMax = nums[indexOfMax];
        const newNode = new TreeClass_1.TreeNode(numOfMax);
        newNode.left = build(L, indexOfMax - 1);
        newNode.right = build(indexOfMax + 1, R);
        return newNode;
    };
    return build(0, nums.length - 1);
};
exports.default = () => {
    const nums = [3, 2, 1, 6, 0, 5];
    console.log(construct(nums));
};
