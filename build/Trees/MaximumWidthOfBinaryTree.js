"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 654. Maximum Binary Tree
 *
 *
 *
 *                1
 *          1            2
 *      1      2      3     4
 *     1 2    3 4    5 6   7 8
 *
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const getMaxWidthRef = (root) => {
    if (!root)
        return 0;
    const queue = [[root, 0]];
    let maxWidth = 0;
    let count = 1;
    while (queue.length) {
        let start = queue[0][1];
        let end = queue[queue.length - 1][1];
        maxWidth = Math.max(maxWidth, end - start + 1);
        while (count) {
            let [n, index] = queue.shift();
            // Need to convert to subindex - don't simply use index or overflow will occur.
            let subIndex = index - start;
            if (n.left)
                queue.push([n.left, subIndex * 2 + 1]);
            if (n.right)
                queue.push([n.right, subIndex * 2 + 2]);
            count--;
        }
        count = queue.length;
    }
    return maxWidth;
};
const getMaxWidth = (root) => {
    if (!root)
        return 0;
    let maxWidth = -Infinity;
    root.val = 0;
    const queue = [root];
    let count = queue.length;
    while (queue.length) {
        let start = queue[0].val;
        let end = queue[queue.length - 1].val;
        let width = end - start + 1;
        maxWidth = Math.max(width, maxWidth);
        while (count) {
            let n = queue.shift();
            // use subindex to prevent overflow
            let subindex = n.val - start;
            if (n.left) {
                n.left.val = (subindex * 2) + 1;
                queue.push(n.left);
            }
            if (n.right) {
                n.right.val = (subindex * 2) + 2;
                queue.push(n.right);
            }
            count--;
        }
        count = queue.length;
    }
    return maxWidth;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(5);
    t.left.right = new TreeClass_1.TreeNode(3);
    t.right.right = new TreeClass_1.TreeNode(9);
    const t2 = new TreeClass_1.TreeNode(0);
    t2.left = new TreeClass_1.TreeNode(0);
    t2.left.left = new TreeClass_1.TreeNode(0);
    t2.left.left.left = new TreeClass_1.TreeNode(0);
    t2.left.left.left.left = new TreeClass_1.TreeNode(1);
    t2.left.left.left.left.left = new TreeClass_1.TreeNode(2);
    t2.left.left.left.left.left.left = new TreeClass_1.TreeNode(4);
    t2.left.left.left.left.left.right = new TreeClass_1.TreeNode(5);
    t2.left.left.left.left.right = new TreeClass_1.TreeNode(3);
    t2.left.left.left.left.right.left = new TreeClass_1.TreeNode(6);
    t2.left.left.left.left.right.right = new TreeClass_1.TreeNode(7);
    console.log(getMaxWidth(t));
    console.log(getMaxWidth(t2));
};
