"use strict";
/**
 * 226. Invert Binary Tree
 *
 * Recurse through binary tree and swap left and right nodes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const branchSums = (root) => {
    let result = [];
    const DFS = (n, currSum) => {
        if (!n)
            return;
        currSum += n.value;
        if (!n.left && !n.right)
            result.push(currSum);
        DFS(n.left, currSum);
        DFS(n.right, currSum);
    };
    DFS(root, 0);
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(4);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(7);
    t.left.left = new TreeClass_1.TreeNode(1);
    t.left.right = new TreeClass_1.TreeNode(3);
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.right = new TreeClass_1.TreeNode(9);
    console.log(branchSums(t));
};
