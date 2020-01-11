/**
 * 437. Path Sum III
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const pathSum = (root: Node, sum: number): number => {
    let result = 0;

    const findPaths = (n: Node, currentSum: number): void => {
        if (!n) return;

        let curr = currentSum - n.val;
        if (curr === 0) result++;
        findPaths(n.left, curr);
        findPaths(n.right, curr);
    };

    const DFS = (n: Node): void => {
        if (!n) return;
        findPaths(n, sum);
        DFS(n.left);
        DFS(n.right);
    };

    DFS(root);
    return result;
};

export default () => {
    const sum = 8;
    const t = new TreeNode(10);
    t.left = new TreeNode(5);
    t.right = new TreeNode(-3);
    t.left.left = new TreeNode(3);
    t.left.right = new TreeNode(2);
    t.right.right = new TreeNode(11);
    t.left.left.left = new TreeNode(3);
    t.left.left.right = new TreeNode(-2);
    t.left.right.right = new TreeNode(1);

    BinaryPreorderTraversal(t);
    console.log(pathSum(t, sum));
};
