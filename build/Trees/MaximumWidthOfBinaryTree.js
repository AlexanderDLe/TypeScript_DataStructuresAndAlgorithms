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
const getMaxWidth = (root) => {
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
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(5);
    t.left.right = new TreeClass_1.TreeNode(3);
    t.right.right = new TreeClass_1.TreeNode(9);
    console.log(getMaxWidth(t));
};
