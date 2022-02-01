/**
 * 226. Invert Binary Tree
 *
 * Recurse through binary tree and swap left and right nodes.
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;
type BinaryTree = Node;

const nodeDepths = (root: Node): number => {
    let result = 0;
    let queue: BinaryTree[] = [];

    if (root) queue.push(root);
    let count = queue.length;
    let depth = 0;

    while (queue.length) {
        while (count) {
            let n = queue.shift();
            result += depth;

            if (n && n.left) queue.push(n.left);
            if (n && n.right) queue.push(n.right);

            count--;
        }

        depth++;
        count = queue.length;
    }

    return result;
}

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(7);
    t.left.left.left = new TreeNode(8);
    t.left.left.right = new TreeNode(9);

    console.log(nodeDepths(t));
};

