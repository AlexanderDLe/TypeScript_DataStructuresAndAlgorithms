"use strict";
/**
 * 1214. Two Sum BSTs
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const sumOfPathNumbers = (root1, root2, target) => {
    const set = new Set();
    let pairFound = false;
    const DFS = (n, action) => {
        if (!n || pairFound)
            return;
        action(n);
        DFS(n.left, action);
        DFS(n.right, action);
    };
    DFS(root1, (n) => n && set.add(n.val));
    DFS(root2, (n) => pairFound = set.has(target - n.val));
    return pairFound;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(7);
    t1.right = new TreeClass_1.TreeNode(9);
    t1.right.left = new TreeClass_1.TreeNode(2);
    t1.right.right = new TreeClass_1.TreeNode(9);
    const t2 = new TreeClass_1.TreeNode(1);
    t2.left = new TreeClass_1.TreeNode(0);
    t2.right = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(1);
    t2.right.left = new TreeClass_1.TreeNode(6);
    t2.right.right = new TreeClass_1.TreeNode(5);
    console.log(sumOfPathNumbers(t1, t2, 15));
};
