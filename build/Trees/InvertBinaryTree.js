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
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    return root;
};
const invertTreeB = (root) => {
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
const invertTreeC = (root) => {
    if (!root)
        return null;
    invertTreeB(root.right);
    invertTreeB(root.left);
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    return root;
};
const invertBinaryTree = (tree) => {
    if (!tree)
        return;
    let temp = tree.right;
    tree.right = tree.left;
    tree.left = temp;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    return tree;
};
const InvertBinaryTreeD = () => {
    const t = new TreeClass_1.TreeNode(4);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(7);
    t.left.left = new TreeClass_1.TreeNode(1);
    t.left.right = new TreeClass_1.TreeNode(3);
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.right = new TreeClass_1.TreeNode(9);
    (0, TreeClass_1.BinaryPreorderTraversal)(invertBinaryTree(t));
};
const InvertBinaryTree = (root) => {
    if (!root)
        return null;
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    InvertBinaryTree(root.left);
    InvertBinaryTree(root.right);
    return root;
};
exports.default = InvertBinaryTree;
