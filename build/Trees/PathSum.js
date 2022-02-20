"use strict";
/**
 * 112. Path Sum
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const pathSum = (root, targetSum) => {
    const DFS = (n, sum) => {
        if (!n)
            return false;
        sum += n.val;
        if (!n.left && !n.right && sum === targetSum)
            return true;
        return DFS(n.left, sum) || DFS(n.right, sum);
    };
    return DFS(root, 0);
};
exports.default = () => {
    const sum = 22;
    const t = new TreeClass_1.TreeNode(5);
    t.left = new TreeClass_1.TreeNode(4);
    t.right = new TreeClass_1.TreeNode(-3);
    t.left.left = new TreeClass_1.TreeNode(11);
    t.left.right = new TreeClass_1.TreeNode(2);
    t.right.right = new TreeClass_1.TreeNode(11);
    t.left.left.left = new TreeClass_1.TreeNode(3);
    t.left.left.right = new TreeClass_1.TreeNode(2);
    t.left.right.right = new TreeClass_1.TreeNode(1);
    (0, TreeClass_1.BinaryPreorderTraversal)(t);
    console.log(pathSum(t, sum));
};
