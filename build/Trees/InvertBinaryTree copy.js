"use strict";
/**
 * 226. Invert Binary Tree
 *
 * Recurse through binary tree and swap left and right nodes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const invertTreeA = (root) => {
    if (!root)
        return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
const invertTree = (root) => {
    const invertChildren = (n) => {
        let temp = n.left;
        n.left = n.right;
        n.right = temp;
    };
    const DFS = (n) => {
        if (!n)
            return;
        invertChildren(n);
        DFS(n.left);
        DFS(n.right);
    };
    DFS(root);
    return root;
};
const invertTreeB = (root) => {
    if (!root)
        return null;
    invertTreeB(root.right);
    invertTreeB(root.left);
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    return root;
};
const InvertBinaryTree = () => {
    const t = new TreeClass_1.TreeNode(4);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(7);
    t.left.left = new TreeClass_1.TreeNode(1);
    t.left.right = new TreeClass_1.TreeNode(3);
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.right = new TreeClass_1.TreeNode(9);
    (0, TreeClass_1.BinaryPreorderTraversal)(invertTreeB(t));
};
exports.default = InvertBinaryTree;
