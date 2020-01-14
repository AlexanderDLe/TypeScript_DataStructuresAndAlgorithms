"use strict";
/**
 * 94. Binary Tree Inorder Traversal
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const Utilities_1 = require("../utils/Utilities");
const inorderTraversalRecursive = (root) => {
    let result = [];
    const DFS = (n) => {
        if (!n)
            return;
        DFS(n.left);
        result.push(n.val);
        DFS(n.right);
    };
    DFS(root);
    return result;
};
const inorderTraversalIterative = (root) => {
    let result = [];
    let stack = [];
    let n = root;
    // While either stack or n contains items
    while (n || stack.length) {
        // Push all left nodes from n into stack as far as possible
        while (n) {
            stack.push(n);
            n = n.left;
        }
        // Pop stack, push val into result
        n = stack.pop();
        result.push(n.val);
        // Set n to repeat process
        n = n.right;
    }
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.right = new TreeClass_1.TreeNode(2);
    t.right.left = new TreeClass_1.TreeNode(3);
    Utilities_1.PrintArray(inorderTraversalRecursive(t));
    Utilities_1.PrintArray(inorderTraversalIterative(t));
};
