/**
 * 104. Maximum Depth of Binary Tree
 */
import { TreeNode } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const maxDepthOld = (root: Node): number => {
    if (!root) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

const maxDepth = (root: Node): number => {
    if (!root) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
}

export default () => {
    const t = new TreeNode(3);
    t.left = new TreeNode(9);
    t.right = new TreeNode(20);
    t.right.left = new TreeNode(15);
    t.right.right = new TreeNode(7);

    console.log(maxDepth(t));
};
