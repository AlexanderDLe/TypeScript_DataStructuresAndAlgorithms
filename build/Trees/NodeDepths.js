"use strict";
/**
 * 226. Invert Binary Tree
 *
 * Recurse through binary tree and swap left and right nodes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const nodeDepths = (root) => {
    let result = 0;
    let queue = [];
    if (root)
        queue.push(root);
    let count = queue.length;
    let depth = 0;
    while (queue.length) {
        while (count) {
            let n = queue.shift();
            result += depth;
            if (n && n.left)
                queue.push(n.left);
            if (n && n.right)
                queue.push(n.right);
            count--;
        }
        depth++;
        count = queue.length;
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
    t.left.left.left = new TreeClass_1.TreeNode(8);
    t.left.left.right = new TreeClass_1.TreeNode(9);
    console.log(nodeDepths(t));
};
