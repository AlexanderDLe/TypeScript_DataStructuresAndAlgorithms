/**
 * 314. Binary Tree Vertical Order Traversal
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;
const binaryTreeLevelOrderTraversal2 = (root: Node): number[][] => {
  if (!root) return [];
  const result:number[][] = []
  const map: any = {};
  const queue: [Node, number][] = [[root, 0]];
  let count = 1;

  while (queue.length) {
    while (count) {
      const [n, pos] = queue.shift();

      if (!map[pos]) map[pos] = [];
      map[pos].push(n.val);

      if (n.left) queue.push([n.left, pos - 1]);
      if (n.right) queue.push([n.right, pos + 1]);
      count--;
    }
    count = queue.length;
  }

  const sorted = Object.keys(map).sort((a, b) => Number(a) - Number(b));
  for (let pos of sorted) {
    result.push(map[pos]);
  }

  return result;
}

export default () => {
  const t = new TreeNode(3);
  t.left = new TreeNode(9);
  t.right = new TreeNode(8);
  t.left.left = new TreeNode(4);
  t.left.right = new TreeNode(0);
  t.right.left = new TreeNode(1);
  t.right.right = new TreeNode(7);
  t.left.right.left = new TreeNode(5);
  t.right.left.right = new TreeNode(2);

  console.log(binaryTreeLevelOrderTraversal2(t));
};