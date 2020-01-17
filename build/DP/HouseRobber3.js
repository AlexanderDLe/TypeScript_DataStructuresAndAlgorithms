"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 337. House Robber 3
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const rob = (root) => {
    if (!root)
        return 0;
    let val = 0;
    if (root.left)
        val += rob(root.left.left) + rob(root.left.right);
    if (root.right)
        val += rob(root.right.left) + rob(root.right.right);
    return Math.max(root.val + val, rob(root.left) + rob(root.right));
};
const robB = (root) => {
    const helper = (node) => {
        if (!node)
            return [0, 0];
        const [lr, ln] = helper(node.left);
        const [rr, rn] = helper(node.right);
        return [
            node.val + ln + rn,
            Math.max(lr + rr, ln + rn, lr + rn, ln + rr)
        ];
    };
    return Math.max(...helper(root));
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.right = new TreeClass_1.TreeNode(3);
    t.right.right = new TreeClass_1.TreeNode(1);
    console.log(robB(t));
    TreeClass_1.BinaryPreorderTraversal(t);
};
