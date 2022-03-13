/**
 * 116. Populating Next Right Pointers In Each Node
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const populateRight = (root: Node): Node => {
  if (!root) return root;

  const queue: Node[] = [root];
  let count = 1;

  while (queue.length) {
    let prev: Node = null;

    while (count) {
      let n: Node = queue.shift();
      if (prev) prev.next = n;
      prev = n;

      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
      count--;
    }
    count = queue.length;
  }
  return root;
}

export default () => {
  const t = new TreeNode(1);
  t.left = new TreeNode(2);
  t.right = new TreeNode(3);
  t.left.left = new TreeNode(4);
  t.left.right = new TreeNode(5);
  t.right.left = new TreeNode(6);
  t.right.right = new TreeNode(7);

  console.log(populateRight(t))
};