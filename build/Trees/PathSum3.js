"use strict";
/**
 * 437. Path Sum III
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const pathSum = (root, sum) => {
    let count = 0;
    let map = { 0: 1 };
    const DFS = (n, prevSum) => {
        if (!n)
            return;
        let currSum = prevSum += n.val;
        let x = currSum - sum;
        if (map[x])
            count += map[x];
        map[currSum] = (map[currSum] | 0) + 1;
        DFS(n.left, currSum);
        DFS(n.right, currSum);
        map[currSum] -= 1;
    };
    DFS(root, 0);
    return count;
};
/*  Slow Double Recursion Solution

    DFS through entire tree. For each node, we use that node as a
    starting position to scan the rest of the lower length of the tree.
 */
const pathSumB = (root, sum) => {
    let count = 0;
    const scan = (n, acc) => {
        if (!n)
            return;
        acc -= n.val;
        if (!acc)
            count++;
        scan(n.left, acc);
        scan(n.right, acc);
    };
    let DFS = (n) => {
        if (!n)
            return;
        DFS(n.left);
        DFS(n.right);
        scan(n, sum);
    };
    DFS(root);
    return count;
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
