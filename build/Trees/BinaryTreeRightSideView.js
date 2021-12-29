"use strict";
/**
 * 199. Binary Tree Right Side View
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const Utilities_1 = require("../utils/Utilities");
const rightSideViewQueue = (root) => {
    if (!root)
        return [];
    let levels = [];
    let queue = [root];
    let count = 1;
    while (queue.length) {
        let level = [];
        while (count) {
            let n = queue.shift();
            level.push(n.val);
            if (n.right)
                queue.push(n.right);
            if (n.left)
                queue.push(n.left);
            count--;
        }
        levels.push(level);
        count = queue.length;
    }
    return levels.map(level => {
        return level[0];
    });
};
const rightSideViewDFS = (root) => {
    const DFS = (node, h) => {
        if (!node)
            return;
        res[h] = node.val;
        DFS(node.left, h + 1);
        DFS(node.right, h + 1);
    };
    if (!root)
        return [];
    let res = [];
    DFS(root, 0);
    return res;
};
const rightSideView = (root) => {
    const DFS = (n, height) => {
        if (!n)
            return;
        result[height] = n.val;
        DFS(n.left, height + 1);
        DFS(n.right, height + 1);
    };
    let result = [];
    DFS(root, 0);
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(3);
    t.right.right = new TreeClass_1.TreeNode(4);
    (0, Utilities_1.PrintArray)(rightSideView(t));
};
