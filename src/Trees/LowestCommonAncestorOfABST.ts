/**
 * 236. Lowest Common Ancestor of a Binary Tree
 *
 * If root is null, p, or q, then return root.
 * Why p or q? Because if root is p or q, then root is the LCA.
 *
 * Otherwise, recurse through the left and right subtree for LCA.
 * If both left and right return a node, then root is the LCA.
 * If left returns null, right will return LCA.
 * If right returns null, left will return LCA.
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const lowestCommonAncestorA = (root: Node, p: Node, q: Node): Node => {
  let LCAFound = false;
  
  const scanSubtree = (n: Node, p: Node, q: Node): number => {
    let nodesFound = 0;
  
    const scan = (n: Node): void => {
      if (!n) return;
      if (n === p || n === q) nodesFound++;
      scan(n.left);
      scan(n.right);
    }
    scan(n);
    return nodesFound
  }

  while (!LCAFound) {
    let rootIsNode = root === p || root === q;
    let nodesInLeft = scanSubtree(root.left, p, q);

    console.log(root === q);
    
    if (rootIsNode) LCAFound = true;
    else {
      if (nodesInLeft === 2) root = root.left;
      if (nodesInLeft === 0) root = root.right;
      if (nodesInLeft === 1) LCAFound = true;
    }
  }

  return root;
}

const lowestCommonAncestorB = (root: Node, p: Node, q: Node): Node => {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestorB(root.left, p, q);
  const right = lowestCommonAncestorB(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
};

const lowestCommonAncestorC = (root: Node, p: Node, q: Node): Node => {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
}

const lowestCommonAncestorD = (root: Node, p: Node, q: Node): Node => {
  const searchSubtree = (node: Node): number => {
  let num = 0;
  const DFS = (n: Node) => {
    if (!n) return;
    if (n === p || n === q) num++;
    DFS(n.left);
    DFS(n.right);
  }
  DFS(node);
  return num;
  }

  const recurse = (n:Node):Node => {
  if (!n) return null;
  if (n === p || n === q) return n;
  let numsOnLeft = searchSubtree(n.left);

  if (numsOnLeft === 1) return n;
  if (numsOnLeft === 2) return recurse(n.left);
  if (numsOnLeft === 0) return recurse(n.right);
  return null;
  }

  return recurse(root);
}

const lowestCommonAncestorE = (root: Node, p: Node, q: Node): Node => {
  if (root === p || root === q) return root;
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  if (root.val <= p.val && root.val <= q.val) return lowestCommonAncestor(root.right, p, q);
  return root;
}

const lowestCommonAncestor = (root: Node, p: Node, q: Node): Node => {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  if (!left) return right;
  else return left;
}

export default () => {
  const t = new TreeNode(6);

  const p = new TreeNode(2);
  t.left = p;
  t.left.left = new TreeNode(0);
  t.left.right = new TreeNode(4);
  t.left.right.left = new TreeNode(3);
  t.left.right.right = new TreeNode(5);

  const q = new TreeNode(8);
  t.right = q;
  t.right.left = new TreeNode(7);
  t.right.right = new TreeNode(9);

  BinaryPreorderTraversal(t);
  console.log(lowestCommonAncestor(t, p, q).val);
};
