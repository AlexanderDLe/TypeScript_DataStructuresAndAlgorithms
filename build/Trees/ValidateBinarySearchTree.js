"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  98. Validate Binary Search Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const isValidBSTA = (root) => {
    if (!root)
        return true;
    const DFS = (root, min, max) => {
        if (!root)
            return true;
        if (min !== null && root.val <= min)
            return false;
        if (max !== null && root.val >= max)
            return false;
        return DFS(root.left, min, root.val) && DFS(root.right, root.val, max);
    };
    return DFS(root, null, null);
};
const isValidBST = (root) => {
    if (!root)
        return true;
    const DFS = (n, min, max) => {
        if (!n)
            return true;
        if (n.value < min || n.value >= max)
            return false;
        let left = DFS(n.left, min, n.value);
        let right = DFS(n.right, n.value, max);
        return left && right;
    };
    return DFS(root, -Infinity, Infinity);
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(2);
    t1.left = new TreeClass_1.TreeNode(1);
    t1.right = new TreeClass_1.TreeNode(3);
    const t2 = new TreeClass_1.TreeNode(5);
    t2.left = new TreeClass_1.TreeNode(1);
    t2.right = new TreeClass_1.TreeNode(4);
    t2.right.left = new TreeClass_1.TreeNode(3);
    t2.right.right = new TreeClass_1.TreeNode(6);
    console.log(isValidBST(t1));
};
