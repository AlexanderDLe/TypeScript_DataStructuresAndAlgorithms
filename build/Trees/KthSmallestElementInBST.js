"use strict";
/**
 * 230. Kth Smallest Element In A BST
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const kthSmallestA = (root, k) => {
    let count = k;
    let number = 0;
    let found = false;
    const DFS = (n) => {
        if (!n || found)
            return;
        DFS(n.left);
        if (found)
            return;
        if (count === 1) {
            number = n.val;
            found = true;
        }
        count--;
        if (n.right) {
            DFS(n.right);
        }
    };
    DFS(root);
    return number;
};
const kthSmallest = (root, k) => {
    let kthSmallest = -1;
    const DFS = (n) => {
        if (!n)
            return;
        DFS(n.left);
        k--;
        if (k === 0)
            kthSmallest = n.val;
        DFS(n.right);
    };
    DFS(root);
    return kthSmallest;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(5);
    t.left = new TreeClass_1.TreeNode(3);
    t.right = new TreeClass_1.TreeNode(6);
    t.left.left = new TreeClass_1.TreeNode(2);
    t.left.right = new TreeClass_1.TreeNode(4);
    t.left.left.left = new TreeClass_1.TreeNode(1);
    let k = 4;
    console.log(kthSmallest(t, k));
};
