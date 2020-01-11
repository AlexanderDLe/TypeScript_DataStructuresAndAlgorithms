"use strict";
/**
 * 437. Path Sum III
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const pathSum = (root, sum) => {
    let result = 0;
    const findPaths = (n, currentSum) => {
        if (!n)
            return;
        let curr = currentSum - n.val;
        if (curr === 0)
            result++;
        findPaths(n.left, curr);
        findPaths(n.right, curr);
    };
    const DFS = (n) => {
        if (!n)
            return;
        findPaths(n, sum);
        DFS(n.left);
        DFS(n.right);
    };
    DFS(root);
    return result;
};
exports.default = () => {
    const sum = 8;
    const t = new TreeClass_1.TreeNode(10);
    t.left = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(-3);
    t.left.left = new TreeClass_1.TreeNode(3);
    t.left.right = new TreeClass_1.TreeNode(2);
    t.right.right = new TreeClass_1.TreeNode(11);
    t.left.left.left = new TreeClass_1.TreeNode(3);
    t.left.left.right = new TreeClass_1.TreeNode(-2);
    t.left.right.right = new TreeClass_1.TreeNode(1);
    TreeClass_1.BinaryPreorderTraversal(t);
    console.log(pathSum(t, sum));
};
