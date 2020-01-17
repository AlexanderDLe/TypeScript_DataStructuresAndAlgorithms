/**
 * 337. House Robber 3
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

const robB = (root: Node): number => {
    const helper = (node: Node): number[] => {
        if (!node) return [0, 0];
        const [lr, ln] = helper(node.left);
        const [rr, rn] = helper(node.right);
        return [
            node.val + ln + rn,
            Math.max(lr + rr, ln + rn, lr + rn, ln + rr)
        ];
    };
    return Math.max(...helper(root));
};

export default () => {
    const t = new TreeNode(3);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.right = new TreeNode(3);
    t.right.right = new TreeNode(1);
    console.log(robB(t));
    BinaryPreorderTraversal(t);
};
