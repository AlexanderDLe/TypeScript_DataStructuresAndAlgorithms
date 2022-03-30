"use strict";
/**
 * 1123. Lowest Common Ancestor of Deepest Leaves
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const findLeaves = (root) => {
    let maxDepth = 0;
    let LCA = null;
    const DFS = (n, depth) => {
        if (!n)
            return depth;
        let left = DFS(n.left, depth + 1);
        let right = DFS(n.right, depth + 1);
        maxDepth = Math.max(maxDepth, left, right);
        if (left === maxDepth && right === maxDepth)
            LCA = n;
        return Math.max(left, right);
    };
    DFS(root, 0);
    return LCA;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(3);
    t1.left = new TreeClass_1.TreeNode(5);
    t1.right = new TreeClass_1.TreeNode(1);
    t1.left.left = new TreeClass_1.TreeNode(6);
    t1.left.right = new TreeClass_1.TreeNode(2);
    t1.right.left = new TreeClass_1.TreeNode(0);
    t1.right.right = new TreeClass_1.TreeNode(8);
    t1.left.right.left = new TreeClass_1.TreeNode(7);
    // t1.left.right.right = new TreeNode(4);
    console.log(findLeaves(t1).val);
};
