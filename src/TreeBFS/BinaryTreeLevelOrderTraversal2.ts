/**
 * Grokking the Coding Interview
 * 
 * 107. Binary Tree Level Order Traversal 2
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const binaryTreeLevelOrderTraversalReversedGrokking = (root: Node): number[][] => {
    let result: number[][] = [];
    let queue: Node[] = [];

    queue.push(root);
    let count = queue.length;

    while (count) {
        const level: number[] = [];

        while (count) {
            let n = queue.shift();
            level.push(n.val);
            if (n.left) queue.push(n.left)
            if (n.right) queue.push(n.right)
            count--
        }
        count = queue.length;
        result.unshift(level);
    }

    return result;
}

const binaryTreeLevelOrderTraversal2 = (root: Node): number[][] => {
  if (!root) return [];

  const queue: Node[] = [root];
  let result: number[][] = [];
  let count = queue.length;

  while (queue.length) {
    let currentLevel: number[] = [];

    while (count) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      count--;
    }

    count = queue.length;
    result.unshift(currentLevel);
  }

  return result;
}

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(7);

    console.log(binaryTreeLevelOrderTraversal2(t));
};