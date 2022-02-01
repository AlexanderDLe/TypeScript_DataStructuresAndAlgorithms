"use strict";
/**
 * 114. Flatten Binary Tree To Linked List
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const findClosestValueInBST = (tree, target) => {
    let closestValue = Infinity;
    let minDiff = Infinity;
    const DFS = (n) => {
        if (!n)
            return;
        let diff = Math.abs(target - n.value);
        if (diff < minDiff) {
            minDiff = diff;
            closestValue = n.value;
        }
        if (n.left && target < n.value)
            DFS(n.left);
        if (n.right && target > n.value)
            DFS(n.right);
    };
    DFS(tree);
    return closestValue;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(10);
    t.left = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(15);
    t.left.left = new TreeClass_1.TreeNode(2);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(13);
    t.right.right = new TreeClass_1.TreeNode(22);
    t.left.left.left = new TreeClass_1.TreeNode(1);
    t.right.left.right = new TreeClass_1.TreeNode(14);
    console.log(findClosestValueInBST(t, 12));
    (0, TreeClass_1.BinaryPreorderTraversal)(t);
};
