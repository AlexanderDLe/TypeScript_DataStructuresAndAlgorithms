/**
 * 112. Path Sum
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const pathSum = (root: Node, targetSum: number): boolean => {
  const DFS = (n: Node, sum: number):boolean => {
    if (!n) return false;
    
    sum += n.val;
    if (!n.left && !n.right && sum === targetSum) return true;
    
    return DFS(n.left, sum) || DFS(n.right, sum);
  }

  return DFS(root, 0);
}

export default () => {
    const sum = 22;

    const t = new TreeNode(5);
    t.left = new TreeNode(4);
    t.right = new TreeNode(-3);
    t.left.left = new TreeNode(11);
    t.left.right = new TreeNode(2);
    t.right.right = new TreeNode(11);
    t.left.left.left = new TreeNode(3);
    t.left.left.right = new TreeNode(2);
    t.left.right.right = new TreeNode(1);

    BinaryPreorderTraversal(t);
    console.log(pathSum(t, sum));
};
