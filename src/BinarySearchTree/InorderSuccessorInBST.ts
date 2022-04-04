/**
 * 285. Inorder Successor in BST
 

                5
            /        \
           3          7
         /   \      /   \
        2     4    6     8
       /
      1

  1. Use Binary Search Tree strucutre to find p.

  2. Go left when p is less than curr, otherwise go right.

  3. Before you go left, push curr to prev, because it is
     possible that the curr is the next inorder element (greater).

  4. Once you find the the node, then there will be two options.
    > If there is a node to the right, then result will be in the right subtree.
      Set curr to right, then go follow left as much as possible.
    
    > If there is no node to the right, that means the next greater node was 
      higher up the tree. Therefore we use prev to get the next greater node (inorder).



                5
            /        \
           3          7
         /   \      /   \
        2     4    6     8
       /
      1

  Ex. Say p is 6.
  1. Since 5 < 6, go to right subtree (root = root.right);
  2. Since 7 > 6, go to left subtree. HOWEVER, since we're going from a
     larger node to a smaller node, it is possible this larger node is the next node.
     Therefore we push it to prev.

  prev = 7.

  3. Since 6 has no right node and prev exists, prev is the next successor.
*/

import { TreeNode } from "../DataStructures/TreeClass";

type Node = TreeNode<number> | null;

function inorderSuccessor(root: Node, p: Node): Node {
	let prev:Node = null;

  while (root && root !== p) {
    if (root.val < p.val) root = root.right;
    else {
      prev = root;
      root = root.left;
    }
  }

  if (!root.right) return prev;

  root = root.right;
  while (root.left) root = root.left;

  return root;
};

export default () => {
  const t = new TreeNode(5);
  t.left = new TreeNode(3);
  t.right = new TreeNode(7);
  t.left.left = new TreeNode(2);
  t.left.right = new TreeNode(4);
  t.left.left.left = new TreeNode(1);
  t.right.left = new TreeNode(6);
  t.right.right = new TreeNode(8);

  const p = t.right.right;

  console.log(inorderSuccessor(t, p)?.val);
};
