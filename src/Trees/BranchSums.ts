/**
 * 226. Invert Binary Tree
 *
 * Recurse through binary tree and swap left and right nodes.
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

type BinaryTree = Node;
const branchSums = (root: Node): number[] => {
    let result: number[] = [];
    
    const DFS = (n: BinaryTree | null, currSum: number): void => {
        if (!n) return;

        currSum += n.value;
        if (!n.left && !n.right) result.push(currSum)
        
        DFS(n.left, currSum);
        DFS(n.right, currSum);
    }

    DFS(root, 0)
    return result;
}

export default () => {
    const t = new TreeNode(4);
    t.left = new TreeNode(2);
    t.right = new TreeNode(7);
    t.left.left = new TreeNode(1);
    t.left.right = new TreeNode(3);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(9);

    console.log(branchSums(t));
};

