"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 236. Lowest Common Ancestor of a Binary Tree
 *
 * If root is null, p, or q, then return root.
 * Why p or q? Because if root is p or q, then root is the LCA.
 *
 * Otherwise, recurse through the left and right subtree for LCA.
 * If both left and right return a node, then root is the LCA.
 * If left returns null, right will return LCA.
 * If right returns null, left will return LCA.
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const lowestCommonAncestorA = (root, p, q) => {
    let LCAFound = false;
    const scanSubtree = (n, p, q) => {
        let nodesFound = 0;
        const scan = (n) => {
            if (!n)
                return;
            if (n === p || n === q)
                nodesFound++;
            scan(n.left);
            scan(n.right);
        };
        scan(n);
        return nodesFound;
    };
    while (!LCAFound) {
        let rootIsNode = root === p || root === q;
        let nodesInLeft = scanSubtree(root.left, p, q);
        console.log(root === q);
        if (rootIsNode)
            LCAFound = true;
        else {
            if (nodesInLeft === 2)
                root = root.left;
            if (nodesInLeft === 0)
                root = root.right;
            if (nodesInLeft === 1)
                LCAFound = true;
        }
    }
    return root;
};
const lowestCommonAncestorB = (root, p, q) => {
    if (!root || root === p || root === q)
        return root;
    const left = lowestCommonAncestorB(root.left, p, q);
    const right = lowestCommonAncestorB(root.right, p, q);
    if (left && right)
        return root;
    return left ? left : right;
};
const lowestCommonAncestorC = (root, p, q) => {
    if (!root || root === p || root === q)
        return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right)
        return root;
    return left ? left : right;
};
const lowestCommonAncestorD = (root, p, q) => {
    const searchSubtree = (node) => {
        let num = 0;
        const DFS = (n) => {
            if (!n)
                return;
            if (n === p || n === q)
                num++;
            DFS(n.left);
            DFS(n.right);
        };
        DFS(node);
        return num;
    };
    const recurse = (n) => {
        if (!n)
            return null;
        if (n === p || n === q)
            return n;
        let numsOnLeft = searchSubtree(n.left);
        if (numsOnLeft === 1)
            return n;
        if (numsOnLeft === 2)
            return recurse(n.left);
        if (numsOnLeft === 0)
            return recurse(n.right);
        return null;
    };
    return recurse(root);
};
const lowestCommonAncestor = (root, p, q) => {
    if (root === p || root === q)
        return root;
    if (root.val > p.val && root.val > q.val)
        return lowestCommonAncestor(root.left, p, q);
    if (root.val <= p.val && root.val <= q.val)
        return lowestCommonAncestor(root.right, p, q);
    return root;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(6);
    const p = new TreeClass_1.TreeNode(2);
    t.left = p;
    t.left.left = new TreeClass_1.TreeNode(0);
    t.left.right = new TreeClass_1.TreeNode(4);
    t.left.right.left = new TreeClass_1.TreeNode(3);
    t.left.right.right = new TreeClass_1.TreeNode(5);
    const q = new TreeClass_1.TreeNode(8);
    t.right = q;
    t.right.left = new TreeClass_1.TreeNode(7);
    t.right.right = new TreeClass_1.TreeNode(9);
    (0, TreeClass_1.BinaryPreorderTraversal)(t);
    console.log(lowestCommonAncestor(t, p, q));
};
