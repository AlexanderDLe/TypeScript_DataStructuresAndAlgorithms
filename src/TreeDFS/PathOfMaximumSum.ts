/**
 * Grokking the Coding Interview
*/

import { TreeNode } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const pathOfMaximumSum = (root: Node): number => {
    let maximumSum = -Infinity;

    const DFS = (n:Node):number => {
        if (!n) return 0;

        let left = DFS(n.left);
        let right = DFS(n.right);

        maximumSum = Math.max(maximumSum, left + right + n.value);
        return Math.max(left + n.value, right + n.value);
    }
    DFS(root);
    return maximumSum;
}


export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(3);
    t1.left.right = new TreeNode(4);
    t1.right.left = new TreeNode(5);
    t1.right.right = new TreeNode(6);
    
    const t2 = new TreeNode(1);
    t2.left = new TreeNode(2);
    t2.right = new TreeNode(3);
    t2.left.left = new TreeNode(1);
    t2.left.right = new TreeNode(3);
    t2.right.left = new TreeNode(5);
    t2.right.right = new TreeNode(6);
    t2.right.left.left = new TreeNode(7);
    t2.right.left.right = new TreeNode(8);
    t2.right.right.left = new TreeNode(9);
    
    console.log(pathOfMaximumSum(t1))
    console.log(pathOfMaximumSum(t2))
};