"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 543. Diameter of Binary Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const findHeight = (n) => {
    if (!n)
        return 0;
    return Math.max(findHeight(n.left), findHeight(n.right)) + 1;
};
const diameterOfBinaryTree = (root) => {
    if (!root)
        return 0;
    const currentDiameter = findHeight(root.left) + findHeight(root.right);
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);
    return Math.max(currentDiameter, Math.max(leftDiameter, rightDiameter));
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.right = new TreeClass_1.TreeNode(6);
    t.right.right.right = new TreeClass_1.TreeNode(7);
    // BinaryPreorderTraversal(t);
    console.log(diameterOfBinaryTree(t));
};
