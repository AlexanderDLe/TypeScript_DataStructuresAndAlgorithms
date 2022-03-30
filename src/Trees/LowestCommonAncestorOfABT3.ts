/**
 * 1650. Lowest Common Ancestor of a Binary Tree 3
 *
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const lowestCommonAncestor = (p: Node, q: Node): Node => {
  const getDistanceToRoot = (n:Node | null):number => {

    let count = 0;

    while (n) {
      n = n.parent;
      count++;
    }

    return count;
  }
  let pDepth = getDistanceToRoot(p);
  let qDepth = getDistanceToRoot(q);

  while (pDepth !== qDepth) {
    if (pDepth > qDepth) {
      pDepth--;
      p = p.parent;
    }
    if (qDepth > pDepth) {
      qDepth--;
      q = q.parent;
    }
  }

  while (p !== q) {
    p = p.parent;
    q = q.parent;
  }

  return p;
}

export default () => {
  const t3 = new TreeNode(3);
  const t5 = new TreeNode(5);
  const t1 = new TreeNode(1);
  const t6 = new TreeNode(6);
  const t2 = new TreeNode(2);
  const t0 = new TreeNode(0);
  const t8 = new TreeNode(8);
  const t7 = new TreeNode(7);
  const t4 = new TreeNode(4);

  t3.left = t5;
  t3.right = t1;
  t5.parent = t3;
  t1.parent = t3;

  t5.left = t6;
  t5.right = t2;
  t6.parent = t5;
  t2.parent = t5;

  t1.left = t0;
  t1.right = t8;
  t0.parent = t1;
  t8.parent = t1;

  t2.left = t7;
  t2.right = t4;
  t7.parent = t2;
  t4.parent = t2;

  BinaryPreorderTraversal(t3);
  console.log(lowestCommonAncestor(t2, t4).val);
};
