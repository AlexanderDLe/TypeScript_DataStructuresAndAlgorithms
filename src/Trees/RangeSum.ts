/**
 * 938. Range Sum of BST
 */

import { TreeNode } from '../DataStructures/TreeClass';

const SolutionRef = (root: TreeNode<number>, L: number, R: number): number => {
  let result = 0;

  const traversalSum = (n: TreeNode<number> | null): void => {
    if (!n) return;
    if (n.val >= L && n.val <= R) {
      result += n.val;
    }
    traversalSum(n.left);
    traversalSum(n.right);
  };

  traversalSum(root);
  return result;
};

type Node = TreeNode<number> | null;
const Solution = (root: TreeNode<number>, L: number, R: number): number => {
  let result = 0;

  const DFS = (n:Node) => {
    if (!n) return;
    if (n.val >= L && n.val <= R) result += n.val;
    DFS(n.left);
    DFS(n.right);
  }

  DFS(root);
  return result;
}

const RangeSum = () => {
  const t = new TreeNode(10);
  t.left = new TreeNode(5);
  t.right = new TreeNode(15);
  t.left.left = new TreeNode(3);
  t.left.right = new TreeNode(7);
  t.right.right = new TreeNode(18);

  const L = 7;
  const R = 15;
  console.log(Solution(t, L, R));
};

export default RangeSum;
