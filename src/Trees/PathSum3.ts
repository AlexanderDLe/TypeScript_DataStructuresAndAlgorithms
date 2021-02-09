/**
 * 437. Path Sum III
 */

import { DefaultSerializer } from 'v8';
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

/*  Frequency Map Method

    Add sums to a frequency map.

    As you DFS through the map, if (current sum - sum) is found
    in the map, then you have found a path sum.

    When you finish a branch, remove its sum from the tree so
    it does not influence the next branch.
*/
type Map = {
    [key: number]: number
}
const pathSum = (root: Node, sum: number): number => {
    let count = 0;
    let map: Map = {0: 1};

    const DFS = (n: Node, prevSum: number): void => {
        if (!n) return;

        let currSum = prevSum += n.val;
        let x = currSum - sum;

        if (map[x]) count += map[x];
        map[currSum] = (map[currSum] | 0) + 1;
        
        DFS(n.left, currSum);
        DFS(n.right, currSum);
        map[currSum] -= 1;
    }

    DFS(root, 0);
    return count;
}

/*  Slow Double Recursion Solution

    DFS through entire tree. For each node, we use that node as a 
    starting position to scan the rest of the lower length of the tree.
 */
const pathSumB = (root: Node, sum: number): number => {
    let count = 0;

    const scan = (n: Node, acc: number): void => {
        if (!n) return;
        acc -= n.val;

        if (!acc) count++;
        scan(n.left, acc);
        scan(n.right, acc);
    }

    let DFS = (n: Node): void => {
        if (!n) return;
        DFS(n.left);
        DFS(n.right);
        scan(n, sum);
    }
    
    DFS(root);
    return count;
}
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
