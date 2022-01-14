/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const binaryTreePathSum = (root: Node, sum: number): boolean => {
    let result: boolean = false;
    
    const DFS = (n: Node, currSum: number): void => {
        if (result || !n) return;
        currSum += n.val;
        DFS(n.left, currSum);
        DFS(n.right, currSum);

        if ((!n.left && !n.right) && currSum === sum) {
            result = true;
        }
    }
    
    DFS(root, 0);
    return result;
}



export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(3);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(5);
    t1.right.left = new TreeNode(6);
    t1.right.right = new TreeNode(7);
    
    const t2 = new TreeNode(12);
    t2.left = new TreeNode(7);
    t2.right = new TreeNode(1);
    t2.left.right = new TreeNode(9);
    t2.right.left = new TreeNode(10);
    t2.right.right = new TreeNode(5);

    console.log(binaryTreePathSum(t1, 10))
    console.log(binaryTreePathSum(t2, 23))
    console.log(binaryTreePathSum(t2, 16))
};