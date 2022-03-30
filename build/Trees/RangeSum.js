"use strict";
/**
 * 938. Range Sum of BST
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const SolutionRef = (root, L, R) => {
    let result = 0;
    const traversalSum = (n) => {
        if (!n)
            return;
        if (n.val >= L && n.val <= R) {
            result += n.val;
        }
        traversalSum(n.left);
        traversalSum(n.right);
    };
    traversalSum(root);
    return result;
};
const Solution = (root, L, R) => {
    let result = 0;
    const DFS = (n) => {
        if (!n)
            return;
        if (n.val >= L && n.val <= R)
            result += n.val;
        DFS(n.left);
        DFS(n.right);
    };
    DFS(root);
    return result;
};
const RangeSum = () => {
    const t = new TreeClass_1.TreeNode(10);
    t.left = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(15);
    t.left.left = new TreeClass_1.TreeNode(3);
    t.left.right = new TreeClass_1.TreeNode(7);
    t.right.right = new TreeClass_1.TreeNode(18);
    const L = 7;
    const R = 15;
    console.log(Solution(t, L, R));
};
exports.default = RangeSum;
