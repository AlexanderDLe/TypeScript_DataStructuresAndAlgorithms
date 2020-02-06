/**
 * 104. Maximum Depth of Binary Tree
 */
import { TreeNode } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const maxDepth = (root: Node): number => {
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
};
