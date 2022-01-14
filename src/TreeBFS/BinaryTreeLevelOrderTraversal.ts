/**
 * Grokking the Coding Interview
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
import QueueReconstructionByHeight from '../Queues/QueueReconstructionByHeight';
import { PrintArray } from '../utils/Utilities';

type Node = TreeNode<number> | null;

const binaryTreeLevelOrderTraversal = (root: Node): number[][] => {
    let result: number[][] = [];
    let queue: Node[] = [];

    queue.push(root);
    let count = queue.length;

    while (count) {
        const level: number[] = [];

        while (count) {
            let n = queue.shift();
            level.push(n.val);
            if (n.left) queue.push(n.left)
            if (n.right) queue.push(n.right)
            count--
        }
        count = queue.length;
        result.push(level);
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

    console.log(binaryTreeLevelOrderTraversal(t))
};