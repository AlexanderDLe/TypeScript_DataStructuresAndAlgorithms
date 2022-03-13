/**
 * 654. Maximum Binary Tree
 * 
 * 
 * 
 *                1
 *          1            2
 *      1      2      3     4
 *     1 2    3 4    5 6   7 8
 *  
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;
type NaI = [Node, number];
const getMaxWidth = (root: Node): number => {
  if (!root) return 0;

  const queue: NaI[] = [[root, 0]];
  let maxWidth = 0;
  let count = 1;

  while (queue.length) {
    let start = queue[0][1];
    let end = queue[queue.length - 1][1];
    maxWidth = Math.max(maxWidth, end - start + 1);

    while (count) {
      let [n, index] = queue.shift();

      // Need to convert to subindex - don't simply use index or overflow will occur.
      let subIndex = index - start;
      if (n.left) queue.push([n.left, subIndex * 2 + 1]);
      if (n.right) queue.push([n.right, subIndex * 2 + 2]);
      count--
    }

    count = queue.length;
  }

  return maxWidth;
}

export default () => {
  const t = new TreeNode(1);
  t.left = new TreeNode(2);
  t.right = new TreeNode(3);
  t.left.left = new TreeNode(5);
  t.left.right = new TreeNode(3);
  t.right.right = new TreeNode(9);

  console.log(getMaxWidth(t));
};
