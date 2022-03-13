"use strict";
/**
 * Grokking the Coding Interview
 *
 * 102. Binary Tree Level Order Traversal
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const binaryTreeLevelOrderTraversalA = (root) => {
    let result = [];
    let queue = [];
    queue.push(root);
    let count = queue.length;
    while (count) {
        const level = [];
        while (count) {
            let n = queue.shift();
            level.push(n.val);
            if (n.left)
                queue.push(n.left);
            if (n.right)
                queue.push(n.right);
            count--;
        }
        count = queue.length;
        result.push(level);
    }
    return result;
};
const binaryTreeLevelOrderTraversal = (root) => {
    if (!root)
        return [];
    const result = [];
    const queue = [root];
    let count = 1;
    while (queue.length) {
        let level = [];
        while (count) {
            const n = queue.shift();
            level.push(n.val);
            n.left && queue.push(n.left);
            n.right && queue.push(n.right);
            count--;
        }
        count = queue.length;
        result.push(level);
    }
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.right = new TreeClass_1.TreeNode(7);
    console.log(binaryTreeLevelOrderTraversal(t));
};
