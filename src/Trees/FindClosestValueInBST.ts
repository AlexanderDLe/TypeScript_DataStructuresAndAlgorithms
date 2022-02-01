/**
 * 114. Flatten Binary Tree To Linked List
 *
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const findClosestValueInBST = (tree: Node, target: number): number => {
    let closestValue = Infinity;
    let minDiff = Infinity;

    const DFS = (n: Node): void => {
        if (!n) return;
        let diff = Math.abs(target - n.value);

        if (diff < minDiff) {
            minDiff = diff;
            closestValue = n.value;
        }

        if (n.left && target < n.value) DFS(n.left);
        if (n.right && target > n.value) DFS(n.right);
    }
    
    DFS(tree);
    return closestValue;
}


export default () => {
    const t = new TreeNode(10);
    t.left = new TreeNode(5);
    t.right = new TreeNode(15);
    t.left.left = new TreeNode(2);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(13);
    t.right.right = new TreeNode(22);
    t.left.left.left = new TreeNode(1);
    t.right.left.right = new TreeNode(14);

    console.log(findClosestValueInBST(t, 12));
    BinaryPreorderTraversal(t);
};
