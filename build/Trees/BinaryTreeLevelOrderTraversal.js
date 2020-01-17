"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 102. Binary Tree Level Order Traversal
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const Utilities_1 = require("../utils/Utilities");
const levelOrder = (root) => {
    if (!root)
        return [];
    let result = [];
    let queue = [];
    queue.push(root);
    let count = 1;
    while (queue.length) {
        let level = [];
        while (count) {
            let n = queue.shift();
            level.push(n.val);
            if (n.left)
                queue.push(n.left);
            if (n.right)
                queue.push(n.right);
            count--;
        }
        result.push(level);
        count = queue.length;
    }
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(9);
    t.right = new TreeClass_1.TreeNode(20);
    t.right.left = new TreeClass_1.TreeNode(15);
    t.right.right = new TreeClass_1.TreeNode(7);
    Utilities_1.PrintMatrix(levelOrder(t));
};
