"use strict";
/**
 *  108. Convert Sorted Array Into Binary Search Tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const sortedArrayToBST = (nums) => {
    if (!nums.length)
        return null;
    let mid = Math.floor(nums.length / 2);
    let node = new TreeClass_1.TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
    return node;
};
const sortedArrayToBSTOld = (nums) => {
    if (!nums.length)
        return null;
    const createNode = (left, right) => {
        if (left > right)
            return null;
        let mid = Math.floor((left + right) / 2);
        let n = new TreeClass_1.TreeNode(nums[mid]);
        n.left = createNode(left, mid - 1);
        n.right = createNode(mid + 1, right);
        return n;
    };
    return createNode(0, nums.length - 1);
};
exports.default = () => {
    const nums = [-10, -3, 0, 5, 9];
    (0, TreeClass_1.BinaryPreorderTraversal)(sortedArrayToBST(nums));
};
