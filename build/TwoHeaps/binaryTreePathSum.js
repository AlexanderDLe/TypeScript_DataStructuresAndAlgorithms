"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const binaryTreePathSum = (root, sum) => {
    let result = false;
    const DFS = (n, currSum) => {
        if (result || !n)
            return;
        currSum += n.val;
        DFS(n.left, currSum);
        DFS(n.right, currSum);
        if ((!n.left && !n.right) && currSum === sum) {
            result = true;
        }
    };
    DFS(root, 0);
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(2);
    t1.right = new TreeClass_1.TreeNode(3);
    t1.left.left = new TreeClass_1.TreeNode(4);
    t1.left.right = new TreeClass_1.TreeNode(5);
    t1.right.left = new TreeClass_1.TreeNode(6);
    t1.right.right = new TreeClass_1.TreeNode(7);
    const t2 = new TreeClass_1.TreeNode(12);
    t2.left = new TreeClass_1.TreeNode(7);
    t2.right = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(9);
    t2.right.left = new TreeClass_1.TreeNode(10);
    t2.right.right = new TreeClass_1.TreeNode(5);
    console.log(binaryTreePathSum(t1, 10));
    console.log(binaryTreePathSum(t2, 23));
    console.log(binaryTreePathSum(t2, 16));
};
