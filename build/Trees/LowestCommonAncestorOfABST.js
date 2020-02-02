'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 236. Lowest Common Ancestor of a Binary Tree
 */
const TreeClass_1 = require('../DataStructures/TreeClass');
const checkSubtree = (root, p, q) => {
    if (!root) return 0;
    let result = 0;
    const que = [];
    que.push(root);
    while (que.length) {
        let len = que.length;
        while (len) {
            const front = que.shift();
            if (front === p || front === q) result++;
            if (front.left) que.push(front.left);
            if (front.right) que.push(front.right);
            len--;
        }
    }
    return result;
};
const lowestCommonAncestorA = (root, p, q) => {
    if (!root || root === p || root === q) return root;
    const res = checkSubtree(root.left, p, q);
    if (res === 0) return lowestCommonAncestorA(root.right, p, q);
    if (res === 2) return lowestCommonAncestorA(root.left, p, q);
    if (res === 1) return root;
};
const lowestCommonAncestorB = (root, p, q) => {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestorB(root.left, p, q);
    const right = lowestCommonAncestorB(root.right, p, q);
    if (left && right) return root;
    return left ? left : right;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    const p = new TreeClass_1.TreeNode(5);
    t.left = p;
    t.left.left = new TreeClass_1.TreeNode(6);
    t.left.right = new TreeClass_1.TreeNode(2);
    t.left.right.left = new TreeClass_1.TreeNode(7);
    t.left.right.right = new TreeClass_1.TreeNode(4);
    const q = new TreeClass_1.TreeNode(1);
    t.right = q;
    t.right.left = new TreeClass_1.TreeNode(0);
    t.right.right = new TreeClass_1.TreeNode(8);
    TreeClass_1.BinaryPreorderTraversal(t);
    console.log(lowestCommonAncestorB(t, p, q));
};
