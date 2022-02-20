/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const levelAveragesA = (root: Node): number[] => {
  let result: number[] = [];
  let queue: Node[] = [];

  queue.push(root);
  let count = queue.length;
  let div = count;

  while (queue.length) {
    let sum = 0;

    while (count) {
      let n: Node = queue.shift();
      sum += n.value;
      
      if (n.left) queue.push(n.left);
      if (n.right) queue.push(n.right);
      count--;
    }
    count = queue.length;
    result.push(sum / div);
    div = count;
  }

  return result;
}

const levelAverages = (root: Node): number[] => {
  let levelAverages: number[] = [];
  let queue: Node[] = [];
  queue.push(root);

  let count = queue.length;
  while (queue.length) {
    let sum = 0;
    let div = count;

    while (count) {
      let node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      count--;
    }

    count = queue.length;
    levelAverages.push(sum / div);
  }

  return levelAverages;
}

export default () => {
  const t = new TreeNode(1);
  t.left = new TreeNode(2);
  t.right = new TreeNode(3);
  t.left.left = new TreeNode(4);
  t.left.right = new TreeNode(5);
  t.right.left = new TreeNode(6);
  t.right.right = new TreeNode(7);

  console.log(levelAverages(t))
};