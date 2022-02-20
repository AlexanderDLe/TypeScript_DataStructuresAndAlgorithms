"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 104. Maximum Depth of Binary Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const maxDepthOld = (root) => {
    if (!root)
        return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
const maxDepth = (root) => {
    if (!root)
        return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(9);
    t.right = new TreeClass_1.TreeNode(20);
    t.right.left = new TreeClass_1.TreeNode(15);
    t.right.right = new TreeClass_1.TreeNode(7);
    console.log(maxDepth(t));
};
