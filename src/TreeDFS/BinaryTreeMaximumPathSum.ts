/**
 * 124. Binary Tree Maximum Path Sum
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const maxPathSumRef = (root: Node): number => {
  let maxSum = -Infinity;
  
  const DFS = (n:Node):number => {
    if (!n) return 0;
    let left = DFS(n.left);
    let right = DFS(n.right);

    let bothChildren = left + right + n.val;
    let withChild = n.val + Math.max(left, right);
    let withoutChild = n.val;

    maxSum = Math.max(maxSum, bothChildren, withChild, withoutChild);

    return Math.max(withChild, withoutChild);
  }

  DFS(root);
  return maxSum;
}

const maxPathSum = (root: Node): number => {
  let maxSum = -Infinity;

  const DFS = (n:Node):number => {
    if (!n) return 0;
    let left = DFS(n.left);
    let right = DFS(n.right);

    let bothChildren = n.val + left + right;
    let oneChild = n.val + Math.max(left, right);
    let noChildren = n.val;

    maxSum = Math.max(maxSum, noChildren, oneChild, bothChildren)
    return Math.max(noChildren, oneChild);
  }

  DFS(root);
  return maxSum;
}

export default () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(2);
  t1.right = new TreeNode(3);
  t1.left.left = new TreeNode(4);
  t1.left.right = new TreeNode(5);
  t1.right.left = new TreeNode(6);
  t1.right.right = new TreeNode(7);
  
  const t2 = new TreeNode(1);
  t2.left = new TreeNode(-2);
  t2.right = new TreeNode(3);

  const t3 = new TreeNode(-10);
  t3.left = new TreeNode(9);
  t3.right = new TreeNode(20);
  t3.right.left = new TreeNode(15);
  t3.right.right = new TreeNode(7);

  console.log(maxPathSum(t1))
  console.log(maxPathSum(t2))
  console.log(maxPathSum(t3))
};