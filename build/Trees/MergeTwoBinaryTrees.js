"use strict";
/**
 * 617. Merge Two Binary Trees
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const mergeTreesA = (t1, t2) => {
    if (!t1)
        return t2;
    if (!t2)
        return t1;
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};
const mergeTreesB = (t1, t2) => {
    if (!t1)
        return t2;
    if (!t2)
        return t1;
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};
const mergeTrees = (t1, t2) => {
    if (!t1)
        return t2;
    if (!t2)
        return t1;
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(3);
    t1.right = new TreeClass_1.TreeNode(2);
    t1.left.left = new TreeClass_1.TreeNode(5);
    const t2 = new TreeClass_1.TreeNode(2);
    t2.left = new TreeClass_1.TreeNode(1);
    t2.right = new TreeClass_1.TreeNode(3);
    t2.left.right = new TreeClass_1.TreeNode(4);
    t2.right.right = new TreeClass_1.TreeNode(7);
    (0, TreeClass_1.BinaryPreorderTraversal)(mergeTrees(t1, t2));
};
