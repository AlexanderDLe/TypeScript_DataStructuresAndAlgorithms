"use strict";
/**
 * 124. Binary Tree Maximum Path Sum
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const maxPathSumRef = (root) => {
    let maxSum = -Infinity;
    const DFS = (n) => {
        if (!n)
            return 0;
        let left = DFS(n.left);
        let right = DFS(n.right);
        let bothChildren = left + right + n.val;
        let withChild = n.val + Math.max(left, right);
        let withoutChild = n.val;
        maxSum = Math.max(maxSum, bothChildren, withChild, withoutChild);
        return Math.max(withChild, withoutChild);
    };
    DFS(root);
    return maxSum;
};
const maxPathSum = (root) => {
    let maxSum = -Infinity;
    const DFS = (n) => {
        if (!n)
            return 0;
        let left = DFS(n.left);
        let right = DFS(n.right);
        let bothChildren = n.val + left + right;
        let oneChild = n.val + Math.max(left, right);
        let noChildren = n.val;
        maxSum = Math.max(maxSum, noChildren, oneChild, bothChildren);
        return Math.max(noChildren, oneChild);
    };
    DFS(root);
    return maxSum;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(2);
    t1.right = new TreeClass_1.TreeNode(3);
    t1.left.left = new TreeClass_1.TreeNode(4);
    t1.left.right = new TreeClass_1.TreeNode(5);
    t1.right.left = new TreeClass_1.TreeNode(6);
    t1.right.right = new TreeClass_1.TreeNode(7);
    const t2 = new TreeClass_1.TreeNode(1);
    t2.left = new TreeClass_1.TreeNode(-2);
    t2.right = new TreeClass_1.TreeNode(3);
    const t3 = new TreeClass_1.TreeNode(-10);
    t3.left = new TreeClass_1.TreeNode(9);
    t3.right = new TreeClass_1.TreeNode(20);
    t3.right.left = new TreeClass_1.TreeNode(15);
    t3.right.right = new TreeClass_1.TreeNode(7);
    console.log(maxPathSum(t1));
    console.log(maxPathSum(t2));
    console.log(maxPathSum(t3));
};
