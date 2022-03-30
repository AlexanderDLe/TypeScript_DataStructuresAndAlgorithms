"use strict";
/**
 * Grokking the Coding Interview
 *
 * 107. Binary Tree Level Order Traversal 2
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const binaryTreeLevelOrderTraversalReversedGrokking = (root) => {
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
        result.unshift(level);
    }
    return result;
};
const binaryTreeLevelOrderTraversal2 = (root) => {
    if (!root)
        return [];
    const queue = [root];
    let result = [];
    let count = queue.length;
    while (queue.length) {
        let currentLevel = [];
        while (count) {
            let node = queue.shift();
            currentLevel.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
            count--;
        }
        count = queue.length;
        result.unshift(currentLevel);
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
    console.log(binaryTreeLevelOrderTraversal2(t));
};
