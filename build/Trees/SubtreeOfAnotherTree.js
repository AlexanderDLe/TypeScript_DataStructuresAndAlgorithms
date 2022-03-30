"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 572. Subtree of Another Tree
 *
 * Time: O(m * n) for each node of main tree, we must search for sub tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const isSubtreeA = (root, subRoot) => {
    let matches = false;
    const sameTree = (p, q) => {
        if (!p && !q)
            return true;
        if (!p || !q)
            return false;
        if (p.val !== q.val)
            return false;
        let left = sameTree(p.left, q.left);
        let right = sameTree(p.right, q.right);
        return left && right;
    };
    const DFS = (n) => {
        if (!n || matches)
            return;
        if (n.val === subRoot.val) {
            if (sameTree(n, subRoot))
                matches = true;
        }
        DFS(n.left);
        DFS(n.right);
    };
    DFS(root);
    return matches;
};
const isSubtreeB = (root, subRoot) => {
    if (!root || !subRoot)
        return false;
    const sameTree = (p, q) => {
        if (!p && !q)
            return true;
        if (!p || !q)
            return false;
        if (p.val !== q.val)
            return false;
        let left = sameTree(p.left, q.left);
        let right = sameTree(p.right, q.right);
        return left && right;
    };
    let leftSubtree = isSubtree(root.left, subRoot);
    let rightSubtree = isSubtree(root.right, subRoot);
    return sameTree(root, subRoot) || leftSubtree || rightSubtree;
};
const isSubtree = (root, subRoot) => {
    if (!root)
        return !subRoot;
    const sameTree = (p, q) => {
        if (!p && !q)
            return true;
        if (!p || !q)
            return false;
        if (p.val !== q.val)
            return false;
        let left = sameTree(p.left, q.left);
        let right = sameTree(p.right, q.right);
        return left && right;
    };
    let leftSubtree = isSubtree(root.left, subRoot);
    let rightSubtree = isSubtree(root.right, subRoot);
    return sameTree(root, subRoot) || leftSubtree || rightSubtree;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(3);
    t1.left = new TreeClass_1.TreeNode(4);
    t1.right = new TreeClass_1.TreeNode(5);
    t1.left.left = new TreeClass_1.TreeNode(1);
    t1.left.right = new TreeClass_1.TreeNode(2);
    // t1.left.left.left = new TreeNode(9);
    const t2 = new TreeClass_1.TreeNode(4);
    t2.left = new TreeClass_1.TreeNode(1);
    t2.right = new TreeClass_1.TreeNode(2);
    (0, TreeClass_1.BinaryPreorderTraversal)(t1);
    console.log(isSubtree(t1, t2));
};
