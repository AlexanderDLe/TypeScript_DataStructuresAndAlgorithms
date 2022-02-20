/**
 * 100. Same Tree
 */

import { TreeNode } from "../DataStructures/TreeClass";



type Node = TreeNode<number> | null;
const sameTrees = (p: Node, q: Node): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  let left = sameTrees(p.left, q.left);
  let right = sameTrees(p.right, q.right);

  return left && right;
}

export default () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(2);
  t1.right = new TreeNode(3);

  const t2 = new TreeNode(1);
  t2.left = new TreeNode(2);
  t2.right = new TreeNode(3);

  console.log(sameTrees(t1, t2));
};
