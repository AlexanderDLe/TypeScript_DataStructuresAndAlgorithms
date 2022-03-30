/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const findLeaves = (root: Node): number[][] => {
  if (!root) return [];
  const result: number[][] = [];

  const DFS = (n:Node, subarr:number[]):boolean => {
    if (!n) return false;
    let left = DFS(n.left, subarr);
    let right = DFS(n.right, subarr);
    
    if (!n.left && !n.right) return true;

    if (left) {
      subarr.push(n.left.val);
      n.left = null;
    }
    if (right) {
      subarr.push(n.right.val);
      n.right = null;
    }

    return false;
  }

  while (root.left || root.right) {
    const subarr: number[] = [];
    DFS(root, subarr);
    result.push(subarr);
  }

  result.push([root.val]);

  return result;
}

export default () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(2);
  t1.right = new TreeNode(3);
  t1.left.left = new TreeNode(4);
  t1.left.right = new TreeNode(5);
  
  console.log(findLeaves(t1))
};