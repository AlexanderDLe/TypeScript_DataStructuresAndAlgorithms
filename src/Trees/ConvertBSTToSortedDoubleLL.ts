/**
 * 426. Convert Binary Search to Sorted Doubly Linked List
 * 
 * We basically create a dummy node as start of the list.
 * 
 * We do a post order traversal because a post-order traversal will
 * give us the sorted order of elements in a binary search tree.
 * 
 * Within the post order traversal, we link the current list node to the 
 * current tree node and vice versa- then iterate the current node forward to the
 * current tree node and continue.
 * 
 * At the very end, we 
 * 
 */

import { prependListener } from 'process';
import { BinaryPreorderTraversal, TreeNode } from '../DataStructures/TreeClass';
import { PrintArray } from '../utils/Utilities';

class Node {
  val: number
  left: Node | null
  right: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const convertToDoublyList = (root: Node | null): Node | null => {
  if (!root) return root;

  const dummy = new Node(0);
  let curr = dummy;

  const DFS = (n:Node | null) => {
    if (!n) return;
    DFS(n.left);

    // In order traversal.
    // Here we have to link into nodes.
    curr.right = n;
    n.left = curr;

    //Mistake: don't forget to traverse the curr node.
    curr = curr.right;

    DFS(n.right);
  }
  DFS(root);

  let head = dummy.right;
  head.left = curr;
  curr.right = head;
  
  return head;
}

export default () => {
  const t = new TreeNode(4);
  t.left = new TreeNode(2);
  t.right = new TreeNode(5);
  t.left.left = new TreeNode(1);
  t.left.right = new TreeNode(3);
  BinaryPreorderTraversal(t);
  console.log(convertToDoublyList(t));
};
