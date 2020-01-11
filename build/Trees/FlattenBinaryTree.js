"use strict";
/**
 * 114. Flatten Binary Tree To Linked List
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const flatten = (root) => {
    if (!root)
        return;
    flatten(root.left);
    flatten(root.right);
    if (root.left) {
        let reconnect = root.right;
        root.right = root.left;
        root.left = null;
        let n = root.right;
        while (n.right) {
            n = n.right;
        }
        n.right = reconnect;
    }
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(5);
    t.left.left = new TreeClass_1.TreeNode(3);
    t.left.right = new TreeClass_1.TreeNode(4);
    t.right.right = new TreeClass_1.TreeNode(6);
    flatten(t);
    TreeClass_1.BinaryPreorderTraversal(t);
};
