/**
 * 113. Path Sum 2
*/

import { TreeNode } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const pathOfMaximumSum = (root: Node, targetSum: number): number[][] => {
  const result: number[][] = [];

  const DFS = (n: Node, sum:number, subarr: number[]) => {
    if (!n) return;
    subarr.push(n.val);
    sum += n.val;

    DFS(n.left, sum, subarr);
    DFS(n.right, sum, subarr);

    if (sum === targetSum && !n.left && !n.right) {
      result.push([...subarr]);
    }
    subarr.pop();
  }

  DFS(root, 0, []);
  return result;
}


export default () => {
  const t1 = new TreeNode(5);
  t1.left = new TreeNode(4);
  t1.right = new TreeNode(8);
  t1.left.left = new TreeNode(11);
  t1.left.left.left = new TreeNode(7);
  t1.left.left.right = new TreeNode(2);
  t1.right.left = new TreeNode(13);
  t1.right.right = new TreeNode(4);
  t1.right.right.left = new TreeNode(5);
  t1.right.right.right = new TreeNode(1);
  
  console.log(pathOfMaximumSum(t1, 22))
  console.log(pathOfMaximumSum(t1, 18))
};