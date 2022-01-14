"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const pathOfMaximumSum = (root) => {
    let maximumSum = -Infinity;
    const DFS = (n) => {
        if (!n)
            return 0;
        let left = DFS(n.left);
        let right = DFS(n.right);
        maximumSum = Math.max(maximumSum, left + right + n.value);
        return Math.max(left + n.value, right + n.value);
    };
    DFS(root);
    return maximumSum;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(2);
    t1.right = new TreeClass_1.TreeNode(3);
    t1.left.right = new TreeClass_1.TreeNode(4);
    t1.right.left = new TreeClass_1.TreeNode(5);
    t1.right.right = new TreeClass_1.TreeNode(6);
    const t2 = new TreeClass_1.TreeNode(1);
    t2.left = new TreeClass_1.TreeNode(2);
    t2.right = new TreeClass_1.TreeNode(3);
    t2.left.left = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(3);
    t2.right.left = new TreeClass_1.TreeNode(5);
    t2.right.right = new TreeClass_1.TreeNode(6);
    t2.right.left.left = new TreeClass_1.TreeNode(7);
    t2.right.left.right = new TreeClass_1.TreeNode(8);
    t2.right.right.left = new TreeClass_1.TreeNode(9);
    console.log(pathOfMaximumSum(t1));
    console.log(pathOfMaximumSum(t2));
};
