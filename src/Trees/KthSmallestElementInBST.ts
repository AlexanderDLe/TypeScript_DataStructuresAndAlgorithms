/**
 * 230. Kth Smallest Element In A BST
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const kthSmallestA = (root: Node, k: number): number => {
    let count = k;
    let number = 0;
    let found = false;

    const DFS = (n: Node): void => {
        if (!n || found) return;

        DFS(n.left);

        if (found) return;
        if (count === 1) {
            number = n.val;
            found = true;
        }
        
        count--;
        if (n.right) {
            DFS(n.right);
        }
    }

    DFS(root);
    return number;
};

const kthSmallest = (root: Node, k: number): number => {
    let kthSmallest = -1;

    const DFS = (n: Node): void => {
        if (!n) return;
        DFS(n.left);

        k--;
        if (k === 0) kthSmallest = n.val;

        DFS(n.right);
    }
    DFS(root);
    return kthSmallest;
}
export default () => {
    const t = new TreeNode(5);
    t.left = new TreeNode(3);
    t.right = new TreeNode(6);
    t.left.left = new TreeNode(2);
    t.left.right = new TreeNode(4);
    t.left.left.left = new TreeNode(1);

    let k = 4;

    console.log(kthSmallest(t, k));
};
