"use strict";
/**
 * 314. Binary Tree Vertical Order Traversal
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const binaryTreeLevelOrderTraversal2 = (root) => {
    if (!root)
        return [];
    const result = [];
    const map = {};
    const queue = [[root, 0]];
    let count = 1;
    while (queue.length) {
        while (count) {
            const [n, pos] = queue.shift();
            if (!map[pos])
                map[pos] = [];
            map[pos].push(n.val);
            if (n.left)
                queue.push([n.left, pos - 1]);
            if (n.right)
                queue.push([n.right, pos + 1]);
            count--;
        }
        count = queue.length;
    }
    const sorted = Object.keys(map).sort((a, b) => Number(a) - Number(b));
    for (let pos of sorted) {
        result.push(map[pos]);
    }
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(9);
    t.right = new TreeClass_1.TreeNode(8);
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.right = new TreeClass_1.TreeNode(0);
    t.right.left = new TreeClass_1.TreeNode(1);
    t.right.right = new TreeClass_1.TreeNode(7);
    t.left.right.left = new TreeClass_1.TreeNode(5);
    t.right.left.right = new TreeClass_1.TreeNode(2);
    console.log(binaryTreeLevelOrderTraversal2(t));
};
