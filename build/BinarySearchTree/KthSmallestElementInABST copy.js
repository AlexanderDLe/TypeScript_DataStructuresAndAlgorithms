"use strict";
/**
 * 230. Kth Smallest Element In A BST
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const kthSmallest = (root, k) => {
    let result = 0;
    let found = false;
    const DFS = (n) => {
        if (!n || false)
            return;
        DFS(n.left);
        k--;
        if (!k) {
            result = n.val;
            found = true;
        }
        DFS(n.right);
    };
    DFS(root);
    return result;
};
exports.default = () => {
    let t1 = new TreeClass_1.TreeNode(3);
    t1.left = new TreeClass_1.TreeNode(1);
    t1.right = new TreeClass_1.TreeNode(4);
    t1.left.right = new TreeClass_1.TreeNode(2);
    let t2 = new TreeClass_1.TreeNode(5);
    t2.left = new TreeClass_1.TreeNode(3);
    t2.right = new TreeClass_1.TreeNode(6);
    t2.left.left = new TreeClass_1.TreeNode(2);
    t2.left.right = new TreeClass_1.TreeNode(4);
    t2.left.left.left = new TreeClass_1.TreeNode(1);
    console.log(kthSmallest(t1, 1));
    console.log(kthSmallest(t2, 3));
};
