"use strict";
/**
 * 100. Same Tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const sameTrees = (p, q) => {
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    if (p.val !== q.val)
        return false;
    let left = sameTrees(p.left, q.left);
    let right = sameTrees(p.right, q.right);
    return left && right;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(2);
    t1.right = new TreeClass_1.TreeNode(3);
    const t2 = new TreeClass_1.TreeNode(1);
    t2.left = new TreeClass_1.TreeNode(2);
    t2.right = new TreeClass_1.TreeNode(3);
    console.log(sameTrees(t1, t2));
};
