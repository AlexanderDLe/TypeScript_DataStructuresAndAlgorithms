"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 104. Maximum Depth of Binary Tree
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const maxDepth = (root) => {
    if (!root)
        return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(9);
    t.right = new TreeClass_1.TreeNode(20);
    t.right.left = new TreeClass_1.TreeNode(15);
    t.right.right = new TreeClass_1.TreeNode(7);
    console.log(maxDepth(t));
};
/* const maxDepth = (root: Node): number => {
    if (!root) return 0;
    let level = 1;
    const DFS = (root: Node, curr: number) => {
        if (!root) return;
        if (curr > level) level = curr;

        DFS(root.left, curr + 1);
        DFS(root.right, curr + 1);
    };

    DFS(root, 1);
    return level;
};

const maxDepthB = (root: Node): number => {
    if (!root) return 0;
    return Math.max(maxDepthB(root.left), maxDepthB(root.right)) + 1;
};

export default () => {
    const t = new TreeNode(3);
    t.left = new TreeNode(9);
    t.right = new TreeNode(20);
    t.right.left = new TreeNode(15);
    t.right.right = new TreeNode(7);

    console.log(maxDepthB(t));
}; */
