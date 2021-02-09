"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 337. House Robber 3
 * DP Approach:
 * On each node, you must essentially ask the question:
 * Which is greater? root val + grandchildren vals OR children vals?
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const rob = (root) => {
    if (!root)
        return 0;
    let Lchild = rob(root.left);
    let Rchild = rob(root.right);
    let val = 0;
    if (root.left) {
        val += rob(root.left.left);
        val += rob(root.left.right);
    }
    if (root.right) {
        val += rob(root.right.left);
        val += rob(root.right.right);
    }
    return Math.max(rob(root.left) + rob(root.right), root.val + val);
};
const robDP = (root) => {
    const robSub = (n) => {
        if (!n)
            return [0, 0];
        let left = robSub(n.left);
        let right = robSub(n.right);
        let res = [0, 0];
        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        res[1] = n.val + left[0] + right[0];
        return res;
    };
    let result = robSub(root);
    return Math.max(result[0], result[1]);
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.right = new TreeClass_1.TreeNode(3);
    t.right.right = new TreeClass_1.TreeNode(1);
    console.log(robDP(t));
    TreeClass_1.BinaryPreorderTraversal(t);
};
