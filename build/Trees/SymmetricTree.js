"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 101. Symmetric Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const isSymmetricOld = (root) => {
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
const isSymmetric = (root) => {
    const DFS = (L, R) => {
        if (!L && !R)
            return true;
        if (!L || !R)
            return false;
        if (L.val !== R.val)
            return false;
        return DFS(L.left, R.right) && DFS(L.right, R.left);
    };
    return DFS(root.left, root.right);
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(3);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(null);
    t.right.right = new TreeClass_1.TreeNode(4);
    (0, TreeClass_1.BinaryPreorderTraversal)(t);
    console.log(isSymmetric(t));
};
