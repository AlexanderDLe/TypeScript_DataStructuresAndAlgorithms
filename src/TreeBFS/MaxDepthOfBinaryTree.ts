/**
 * Grokking the Coding Interview 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const maxDepthOfBinaryTree = (root: Node): number => {
  if (!root) return 0;
  return 1 + Math.max(maxDepthOfBinaryTree(root.left), maxDepthOfBinaryTree(root.right));
}

export default () => {
    
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(7);
    t.right.right.left = new TreeNode(7);

    console.log(maxDepthOfBinaryTree(t))
};