/**
 * 1123. Lowest Common Ancestor of Deepest Leaves
 * 
*/

import { TreeNode } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const findLeaves = (root: Node): Node => {
  let maxDepth = 0;
  let LCA:Node = null;

  const DFS = (n:Node, depth:number):number => {
    if (!n) return depth;

    let left = DFS(n.left, depth + 1);
    let right = DFS(n.right, depth + 1);

    maxDepth = Math.max(maxDepth, left, right);

    if (left === maxDepth && right === maxDepth) LCA = n;
    return Math.max(left, right);
  }

  DFS(root, 0);
  return LCA;
}

export default () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(5);
  t1.right = new TreeNode(1);
  t1.left.left = new TreeNode(6);
  t1.left.right = new TreeNode(2);
  t1.right.left = new TreeNode(0);
  t1.right.right = new TreeNode(8);
  t1.left.right.left = new TreeNode(7);
  // t1.left.right.right = new TreeNode(4);
  
  console.log(findLeaves(t1).val)
};