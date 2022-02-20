"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 543. Diameter of Binary Tree
 *
 * A diameter of the binary tree is determined by the
 * longest continuous line of nodes through the tree.
 *
 * A diameter of the current node is determined by the
 * sum of the heights of its left and right subtrees.
 *
 * Recurse through the tree and eventually return the
 * greatest value (aka diameter) seen.
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const diameterOfBinaryTreeA = (root) => {
    let diameter = 0;
    const findHeight = (n) => {
        if (!n)
            return 0;
        return Math.max(findHeight(n.left), findHeight(n.right)) + 1;
    };
    const DFS = (n) => {
        if (!n)
            return;
        let currHeight = findHeight(n.left) + findHeight(n.right);
        diameter = Math.max(diameter, currHeight);
        DFS(n.left);
        DFS(n.right);
    };
    DFS(root);
    return diameter;
};
const diameterOfBinaryTreeB = (root) => {
    let maxDiameter = 0;
    const DFS = (n) => {
        if (!n)
            return 0;
        let left = DFS(n.left);
        let right = DFS(n.right);
        maxDiameter = Math.max(maxDiameter, left + right);
        console.log(`n: ${n.val}, left: ${left}, right: ${right}, maxDia: ${maxDiameter}, return: ${Math.max(left + 1, right + 1)}`);
        return Math.max(left + 1, right + 1);
    };
    DFS(root);
    return maxDiameter;
};
const diameterOfBinaryTreeOld = (root) => {
    const findHeight = (n) => {
        if (!n)
            return 0;
        return Math.max(findHeight(n.left), findHeight(n.right)) + 1;
    };
    if (!root)
        return 0;
    const currentDiameter = findHeight(root.left) + findHeight(root.right);
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);
    return Math.max(currentDiameter, Math.max(leftDiameter, rightDiameter));
};
const diameterOfBinaryTreeC = (root) => {
    let maxDiameter = 0;
    const recurse = (n) => {
        if (!n)
            return 0;
        let left = recurse(n.left);
        let right = recurse(n.right);
        maxDiameter = Math.max(maxDiameter, left + right);
        return Math.max(left + 1, right + 1);
    };
    recurse(root);
    return maxDiameter;
};
const diameterOfBinaryTree = (root) => {
    let longestDiameter = 0;
    const DFS = (n) => {
        if (!n)
            return 0;
        let left = DFS(n.left);
        let right = DFS(n.right);
        let diameter = left + right;
        longestDiameter = Math.max(longestDiameter, diameter);
        return 1 + Math.max(left, right);
    };
    DFS(root);
    return longestDiameter;
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
