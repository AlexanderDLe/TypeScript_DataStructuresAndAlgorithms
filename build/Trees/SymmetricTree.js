"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 101. Symmetric Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const isSymmetric = (root) => {
    if (!root)
        return true;
    let result = true;
    const DFS = (l, r) => {
        if (!l && !r)
            return;
        if ((!l && r) || (l && !r) || l.val !== r.val) {
            result = false;
            return;
        }
        DFS(l.left, r.right);
        DFS(r.left, l.right);
    };
    DFS(root.left, root.right);
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(2);
    t.left.left = new TreeClass_1.TreeNode(3);
    t.left.right = new TreeClass_1.TreeNode(4);
    t.right.left = new TreeClass_1.TreeNode(4);
    t.right.right = new TreeClass_1.TreeNode(3);
    TreeClass_1.BinaryPreorderTraversal(t);
    console.log(isSymmetric(t));
};
