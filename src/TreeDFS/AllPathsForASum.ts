/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const allPathsForASum = (root: Node, sum: number): number[][] => {
    let result: number[][] = [];
    
    const DFS = (n: Node, currSum: number, subarr:number[]): void => {
        if (!n) return;
        subarr = [...subarr, n.value];
        currSum += n.value;
        DFS(n.left, currSum, subarr);
        DFS(n.right, currSum, subarr);

        if (!n.left && !n.right && currSum === sum) {
            result.push(subarr)
        }
    }

    DFS(root, 0, []);
    return result;
}



export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(7);
    t1.right = new TreeNode(9);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(5);
    t1.right.left = new TreeNode(2);
    t1.right.right = new TreeNode(7);
    
    const t2 = new TreeNode(12);
    t2.left = new TreeNode(7);
    t2.right = new TreeNode(1);
    t2.left.right = new TreeNode(4);
    t2.right.left = new TreeNode(10);
    t2.right.right = new TreeNode(5);

    console.log(allPathsForASum(t1, 12))
    console.log(allPathsForASum(t2, 23))
};