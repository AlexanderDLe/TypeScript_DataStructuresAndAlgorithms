/**
 * 1214. Two Sum BSTs
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const sumOfPathNumbers = (root1: Node, root2:Node, target:number): boolean => {
  const set = new Set();
  let pairFound = false;
    
  const DFS = (n: Node, action: any) => {
      if (!n || pairFound) return;
      action(n);
      DFS(n.left, action);
      DFS(n.right, action);
  }
  
  DFS(root1, (n:Node) => n && set.add(n.val));
  DFS(root2, (n:Node) => pairFound = set.has(target - n.val));
  return pairFound;
}

export default () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(7);
  t1.right = new TreeNode(9);
  t1.right.left = new TreeNode(2);
  t1.right.right = new TreeNode(9);
  
  const t2 = new TreeNode(1);
  t2.left = new TreeNode(0);
  t2.right = new TreeNode(1);
  t2.left.right = new TreeNode(1);
  t2.right.left = new TreeNode(6);
  t2.right.right = new TreeNode(5);

  console.log(sumOfPathNumbers(t1, t2, 15))
};