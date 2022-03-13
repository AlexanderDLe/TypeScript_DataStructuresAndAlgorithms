/**
 * 863. All Nodes Distance K in Binary Tree
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const distanceK = (root: Node, target: Node, k: number): number[]=> {
  const buildParentsMap = (node: Node): any => {
    let map: any = {};

    const DFS = (n: Node, prev: Node) => {
      if (!n) return;
      map[n.val] = prev;
      DFS(n.left, n);
      DFS(n.right, n);
    }
    DFS(node, null);
    return map;
  }
  
  const queue: Node[] = [target];
  const parentOf: any = buildParentsMap(root);
  const visited = new Set();
  let count = queue.length;

  while (queue.length && k) {
    while (count) {
      let n = queue.shift();
      visited.add(n.val);
      let parent = parentOf[n.val];

      if (n.left && !visited.has(n.left.val)) queue.push(n.left);
      if (n.right && !visited.has(n.right.val)) queue.push(n.right);
      if (parent && !visited.has(parent.val)) queue.push(parent);

      count--;
    }
    k--;
    count = queue.length;
    console.log(queue.map(x => x.val));
  }

  if (k) return [];
  return queue.map(x => x.val);
}

export default () => {
  const t = new TreeNode(3);
  t.left = new TreeNode(5);
  t.right = new TreeNode(1);
  t.left.left = new TreeNode(6);
  t.left.right = new TreeNode(2);
  t.right.left = new TreeNode(0);
  t.right.right = new TreeNode(8);
  t.left.right.left = new TreeNode(7)
  t.left.right.right = new TreeNode(4)

  console.log(distanceK(t, t.left, 2))
};