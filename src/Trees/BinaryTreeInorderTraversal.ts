/**
 * 94. Binary Tree Inorder Traversal
 */

import { TreeNode } from '../DataStructures/TreeClass';
import { PrintArray } from '../utils/Utilities';

type Node = TreeNode<number> | null;

const inorderTraversalRecursive = (root: Node): number[] => {
    let result: number[] = [];

    const DFS = (n: Node): void => {
        if (!n) return;
        DFS(n.left);
        result.push(n.val);
        DFS(n.right);
    };

    DFS(root);
    return result;
};
const inorderTraversalIterative = (root: Node): number[] => {
    let result: number[] = [];
    let stack: Node[] = [];
    let n: Node = root;

    // While either stack or n contains items
    while (n || stack.length) {
        // Push all left nodes from n into stack as far as possible
        while (n) {
            stack.push(n);
            n = n.left;
        }
        // Pop stack, push val into result
        n = stack.pop();
        result.push(n.val);

        // Set n to repeat process
        n = n.right;
    }

    return result;
};

export default () => {
    const t = new TreeNode(1);
    t.right = new TreeNode(2);
    t.right.left = new TreeNode(3);
    PrintArray(inorderTraversalRecursive(t));
    PrintArray(inorderTraversalIterative(t));
};
