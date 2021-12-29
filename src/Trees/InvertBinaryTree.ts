/**
 * 226. Invert Binary Tree
 *
 * Recurse through binary tree and swap left and right nodes.
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const invertTreeA = (root: Node): Node => {
    if (!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

const invertTree = (root: Node): Node => {
    const invertChildren = (n: Node) => {
        let temp = n.left;
        n.left = n.right;
        n.right = temp;
    }

    const DFS = (n: Node) => {
        if (!n) return;
        invertChildren(n);
        DFS(n.left);
        DFS(n.right);
    }

    DFS(root);
    return root;
}

const invertTreeB = (root: Node): Node => {
    if (!root) return null;
    invertTreeB(root.right);
    invertTreeB(root.left);
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    return root;
}

const InvertBinaryTree = () => {
    const t = new TreeNode(4);
    t.left = new TreeNode(2);
    t.right = new TreeNode(7);
    t.left.left = new TreeNode(1);
    t.left.right = new TreeNode(3);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(9);

    BinaryPreorderTraversal(invertTreeB(t));
};

export default InvertBinaryTree;
