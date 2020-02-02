/**
 * 236. Lowest Common Ancestor of a Binary Tree
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const checkSubtree = (root: Node, p: Node, q: Node): number => {
    if (!root) return 0;
    let result = 0;
    const que: Node[] = [];
    que.push(root);

    while (que.length) {
        let len = que.length;
        while (len) {
            const front = que.shift();
            if (front === p || front === q) result++;
            if (front.left) que.push(front.left);
            if (front.right) que.push(front.right);
            len--;
        }
    }
    return result;
};
const lowestCommonAncestorA = (root: Node, p: Node, q: Node): Node => {
    if (!root || root === p || root === q) return root;

    const res = checkSubtree(root.left, p, q);
    if (res === 0) return lowestCommonAncestorA(root.right, p, q);
    if (res === 2) return lowestCommonAncestorA(root.left, p, q);
    if (res === 1) return root;
};

const lowestCommonAncestorB = (root: Node, p: Node, q: Node): Node => {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestorB(root.left, p, q);
    const right = lowestCommonAncestorB(root.right, p, q);
    if (!left && !right) return root;
    return left ? left : right;
};

export default () => {
    const t = new TreeNode(3);

    const p = new TreeNode(5);
    t.left = p;
    t.left.left = new TreeNode(6);
    t.left.right = new TreeNode(2);
    t.left.right.left = new TreeNode(7);
    t.left.right.right = new TreeNode(4);

    const q = new TreeNode(1);
    t.right = q;
    t.right.left = new TreeNode(0);
    t.right.right = new TreeNode(8);

    BinaryPreorderTraversal(t);
    console.log(lowestCommonAncestorB(t, p, q));
};
