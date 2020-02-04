/**
 * 337. House Robber 3
 * DP Approach:
 * On each node, you must essentially ask the question:
 * Which is greater? root val + grandchildren vals OR children vals?
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const rob = (root: Node): number => {
    if (!root) return 0;

    let val = 0;
    if (root.left) val += rob(root.left.left) + rob(root.left.right);
    if (root.right) val += rob(root.right.left) + rob(root.right.right);

    return Math.max(root.val + val, rob(root.left) + rob(root.right));
};

export default () => {
    const t = new TreeNode(3);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.right = new TreeNode(3);
    t.right.right = new TreeNode(1);
    console.log(rob(t));
    BinaryPreorderTraversal(t);
};
