/**
 * 226. Invert Binary Tree
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;
const invertTree = (root: Node): Node => {
    if (!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

const InvertBinaryTree = () => {
    const t = new TreeNode(4);
    t.left = new TreeNode(2);
    t.right = new TreeNode(7);
    t.left.left = new TreeNode(1);
    t.left.right = new TreeNode(3);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(9);

    BinaryPreorderTraversal(invertTree(t));
};

export default InvertBinaryTree;
