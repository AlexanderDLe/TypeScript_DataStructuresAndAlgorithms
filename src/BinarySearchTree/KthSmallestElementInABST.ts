/**
 * 230. Kth Smallest Element In A BST
*/

import { TreeNode } from "../DataStructures/TreeClass";

type Node = TreeNode<number> | null;
const kthSmallest = (root: Node, k: number): number => {
  let result = 0;
  let found = false;

  const DFS = (n: Node) => {
    if (!n || false) return;
    DFS(n.left);
    k--;
    if (!k) {
      result = n.val;
      found = true;
    }
    DFS(n.right);
  }
  DFS(root);
  
  return result;
}

export default () => {
  let t1 = new TreeNode(3);
  t1.left = new TreeNode(1);
  t1.right = new TreeNode(4);
  t1.left.right = new TreeNode(2);

  let t2 = new TreeNode(5);
  t2.left = new TreeNode(3);
  t2.right = new TreeNode(6);
  t2.left.left = new TreeNode(2);
  t2.left.right = new TreeNode(4);
  t2.left.left.left = new TreeNode(1);

  console.log(kthSmallest(t1, 1))
  console.log(kthSmallest(t2, 3))
};
