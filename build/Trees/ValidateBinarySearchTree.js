"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  98. Validate Binary Search Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const isValidBST = (root) => {
    if (!root)
        return true;
    const DFS = (root, min, max) => {
        if (!root)
            return true;
        if (root.val >= max || root.val <= min)
            return false;
        let left = DFS(root.left, min, root.val);
        let right = DFS(root.right, root.val, max);
        return left && right ? true : false;
    };
    let leftDFS = DFS(root.left, Number.NEGATIVE_INFINITY, root.val);
    let rightDFS = DFS(root.right, root.val, Number.POSITIVE_INFINITY);
    return leftDFS && rightDFS ? true : false;
};
const isValidBSTB = (root) => {
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
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(2);
    t1.left = new TreeClass_1.TreeNode(1);
    t1.right = new TreeClass_1.TreeNode(3);
    const t2 = new TreeClass_1.TreeNode(5);
    t2.left = new TreeClass_1.TreeNode(1);
    t2.right = new TreeClass_1.TreeNode(4);
    t2.right.left = new TreeClass_1.TreeNode(3);
    t2.right.right = new TreeClass_1.TreeNode(6);
    console.log(isValidBSTB(t1));
};
