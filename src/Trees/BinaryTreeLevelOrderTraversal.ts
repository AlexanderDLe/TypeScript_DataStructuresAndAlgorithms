/**
 * 102. Binary Tree Level Order Traversal
 */
import { TreeNode } from '../DataStructures/TreeClass';
import { PrintMatrix } from '../utils/Utilities';

type Node = TreeNode<number> | null;
const levelOrder = (root: Node): number[][] => {
    if (!root) return [];
    let result: number[][] = [];
    let queue: Node[] = [];

    queue.push(root);
    let count = 1;
    while (queue.length) {
        let level: number[] = [];

        while (count) {
            let n = queue.shift();
            level.push(n.val);
            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);
            count--;
        }
        result.push(level);
        count = queue.length;
    }

    return result;
};

export default () => {
    const t = new TreeNode(3);
    t.left = new TreeNode(9);
    t.right = new TreeNode(20);
    t.right.left = new TreeNode(15);
    t.right.right = new TreeNode(7);

    PrintMatrix(levelOrder(t));
};
