/**
 * Grokking the Coding Interview
 * 
 * 199. Binary Tree Right Side View
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const rightViewOfBinaryTreeRef = (root: Node): number[] => {
  let result: number[] = [];
  let queue: Node[] = [];

  queue.push(root);
  let count = queue.length;

  while (queue.length) {
    while (count) {
      let n = queue.shift();
      count--;

      if (n.left) queue.push(n.left);
      if (n.right) queue.push(n.right);
      if (!count) result.push(n.val);
      
    }
    count = queue.length;
  }
  
  return result;
}

const rightViewOfBinaryTree = (root: Node): number[] => {
  if (!root) return [];

  const queue = [root];
  const result: number[] = [];
  let count = 1;

  while (queue.length) {
    while (count) {
      let n = queue.shift();
      count--;
      
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
      if (!count) result.push(n.val);
    }
    count = queue.length;
  }
  return result;
}

export default () => {
  
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(2);
  t1.right = new TreeNode(3);
  t1.left.left = new TreeNode(4);
  t1.left.right = new TreeNode(5);
  t1.right.left = new TreeNode(6);
  t1.right.right = new TreeNode(7);
  
  const t2 = new TreeNode(12);
  t2.left = new TreeNode(7);
  t2.right = new TreeNode(1);
  t2.left.right = new TreeNode(9);
  t2.right.left = new TreeNode(10);
  t2.right.right = new TreeNode(5);

  console.log(rightViewOfBinaryTree(t1))
  console.log(rightViewOfBinaryTree(t2))
};