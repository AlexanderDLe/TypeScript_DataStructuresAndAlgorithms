/**
 * 617. Merge Two Binary Trees
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const mergeTrees = (t1: Node, t2: Node): Node => {
    if (!t1) return t2;
    if (!t2) return t1;

    t1.val += t2.val;

    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);

    return t1;
}

export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(3);
    t1.right = new TreeNode(2);
    t1.left.left = new TreeNode(5);

    const t2 = new TreeNode(2);
    t2.left = new TreeNode(1);
    4;
    t2.right = new TreeNode(3);
    t2.left.right = new TreeNode(4);
    t2.right.right = new TreeNode(7);

    BinaryPreorderTraversal(mergeTrees(t1, t2));
};
