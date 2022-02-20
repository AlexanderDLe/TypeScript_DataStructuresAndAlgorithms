"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const minDepthOfBinaryTreeA = (root) => {
    let queue = [];
    queue.push(root);
    let count = queue.length;
    let level = count;
    while (queue.length) {
        while (count) {
            let n = queue.shift();
            if (!n.left || !n.right)
                return level;
            queue.push(n.left);
            queue.push(n.right);
            count--;
        }
        level++;
        count = queue.length;
    }
    return level;
};
const minDepthOfBinaryTree = (root) => {
    const queue = root ? [root] : [];
    let count = queue.length;
    let depth = count;
    while (queue.length) {
        while (count) {
            let n = queue.shift();
            if (!n.left && !n.right)
                return depth;
            if (n.left)
                queue.push(n.left);
            if (n.right)
                queue.push(n.right);
            count--;
        }
        count = queue.length;
        if (count)
            depth++;
    }
    return depth;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(6);
    // t.right.right = new TreeNode(7);
    console.log(minDepthOfBinaryTree(t));
};
