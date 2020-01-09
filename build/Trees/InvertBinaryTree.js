"use strict";
/**
 * 226. Invert Binary Tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const invertTree = (root) => {
    if (!root)
        return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
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
    TreeClass_1.BinaryPreorderTraversal(invertTree(t));
};
exports.default = InvertBinaryTree;
