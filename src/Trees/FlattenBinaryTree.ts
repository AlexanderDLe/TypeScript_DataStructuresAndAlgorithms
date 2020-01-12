/**
 * 114. Flatten Binary Tree To Linked List
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const flattenA = (root: Node): void => {
    if (!root) return;

    flattenA(root.left);
    flattenA(root.right);

    if (root.left) {
        let reconnect = root.right;
        root.right = root.left;
        root.left = null;

        let n = root.right;

        while (n.right) {
            n = n.right;
        }
        n.right = reconnect;
    }
};

let pre: Node = null;
const flattenB = (root: Node) => {
    if (root == null) return;
    flattenB(root.right);
    flattenB(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
};

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(5);
    t.left.left = new TreeNode(3);
    t.left.right = new TreeNode(4);
    t.right.right = new TreeNode(6);

    flattenB(t);
    BinaryPreorderTraversal(t);
};
