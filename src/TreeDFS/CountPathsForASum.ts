/**
 * Grokking the Coding Interview
 * 
 ***************************************** 
 * 
 * S = 12           outsideSum = currSum - S
 * 
 * currSum is the sum of all node values up until the current node.
 * 
 * outsideSum is the hopeful sum outside of the accumulative sum from the current node
 * going backwards. Take for example:
 * 
 * If S is 9, then working backwards 5 + 4 equals S.
 * 
 * 1 -> 2 -> 3 -> |4 -> 5 |     currSum = 15.
 *                      ^       4 + 5 = 9
 * 
 * To determine the valid path sum, the sum outside 9 has to be 6.
 * 
 * The currentSum - S will give us the ideal outsideSum.
 * outsideSum should be checked in a map that stores the currSums on each node
 *                              
 * 
 ***************************************** 
 * 
 * 1 -> 7 -> 5      currSum = 1
 * ^                outsideSum = |1 - 12| = 11
 * 
 * map = {1: 1}
 * 
 ***************************************** 
 * 
 * 1 -> 7 -> 5      currSum = 8
 *      ^           outsideSum = |8 - 12| = 4
 * 
 * map = {1: 1, 8: 1}
 * 
 ***************************************** 
 * 
 * 1 -> 7 -> 5      currSum = 13
 *           ^      outsideSum = |13 - 12| = 1
 * 
 * map = {1: 1, 8: 1, 13: 1}
 * 
 ***************************************** 
*/

import { TreeNode } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const countPathsForASumRef = (root: Node, S:number): number => {
    let result = 0;
    let map: any = {0: 1};

    const DFS = (n:Node, prevSum:number): void => {
        if (!n) return;
        
        let currSum = prevSum + n.value;
        let outsideSum = currSum - S;        
        
        if (map[outsideSum]) result += map[outsideSum];
        map[currSum] = (map[currSum] || 0) + 1;
        
        DFS(n.left, currSum);
        DFS(n.right, currSum);
        
        map[currSum]--;
    }
    
    DFS(root, 0);
    console.log(map);
    return result;
}

const countPathsForASum = (root: Node, S:number): number => {
    let result = 0;
    let map: any = {0 : 1}
    
    const DFS = (n:Node, prevSum:number):void => {
        if (!n) return;

        let currSum = prevSum + n.value;
        let outsideSum = currSum - S;

        if (map[outsideSum]) result += map[outsideSum];
        map[currSum] = (map[currSum] || 0) + 1;

        DFS(n.left, currSum);
        DFS(n.right, currSum);

        map[currSum]--;
    }

    DFS(root, 0);
    return result;
}

export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(7);
    t1.right = new TreeNode(9);
    t1.left.left = new TreeNode(6);
    t1.left.right = new TreeNode(5);
    t1.right.left = new TreeNode(2);
    t1.right.right = new TreeNode(3);
    const sum1 = 12
    
    const t2 = new TreeNode(12);
    t2.left = new TreeNode(7);
    t2.right = new TreeNode(1);
    t2.left.right = new TreeNode(4);
    t2.right.left = new TreeNode(10);
    t2.right.right = new TreeNode(5);
    const sum2 = 11

    console.log(countPathsForASum(t1, sum1))
    console.log(countPathsForASum(t2, sum2))
};