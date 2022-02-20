/**
 * 572. Subtree of Another Tree
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const isSubtreeA = (root: Node, subRoot: Node): boolean => {
  let matches = false;

  const sameTree = (p: Node, q: Node): boolean => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    let left = sameTree(p.left, q.left);
    let right = sameTree(p.right, q.right);

    return left && right;
  }

  const DFS = (n: Node) => {
    if (!n || matches) return;
    if (n.val === subRoot.val) {
      if (sameTree(n, subRoot)) matches = true;
    }
    DFS(n.left);
    DFS(n.right);
  }
  DFS(root);
  return matches;
}

const isSubtree = (root: Node, subRoot: Node): boolean => {
  if (!root || !subRoot) return false;

  const sameTree = (p: Node, q: Node): boolean => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    let left = sameTree(p.left, q.left);
    let right = sameTree(p.right, q.right);

    return left && right;
  }

  let leftSubtree = isSubtree(root.left, subRoot);
  let rightSubtree = isSubtree(root.right, subRoot);
  return sameTree(root, subRoot) || leftSubtree || rightSubtree;
}

export default () => {
    const t1 = new TreeNode(3);
    t1.left = new TreeNode(4);
    t1.right = new TreeNode(5);

    t1.left.left = new TreeNode(1);
    t1.left.right = new TreeNode(2);
    t1.left.left.left = new TreeNode(9);

    const t2 = new TreeNode(4);
    t2.left = new TreeNode(1)
    t2.right = new TreeNode(2);

    BinaryPreorderTraversal(t1);
    console.log(isSubtree(t1, t2));
};
