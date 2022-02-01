"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 102. Binary Tree Level Order Traversal
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
exports.default = () => {
    const t = new TreeClass_1.TreeNode(10);
    t.left = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(15);
    t.left.left = new TreeClass_1.TreeNode(2);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(13);
    t.right.right = new TreeClass_1.TreeNode(22);
    t.left.left.left = new TreeClass_1.TreeNode(1);
    t.right.left.right = new TreeClass_1.TreeNode(14);
};
