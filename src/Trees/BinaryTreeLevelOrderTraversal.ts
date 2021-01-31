/**
 * 102. Binary Tree Level Order Traversal
 */
import { TreeNode } from '../DataStructures/TreeClass';
import { PrintMatrix } from '../utils/Utilities';

type Node = TreeNode<number> | null;


/*  Recursion Analysis

    Time Complexity: O(n). Each node in the visited one time.
    If a tree has 3 nodes, then there are 3 traversals.

    Space Complexity: O(n). The value of each node of the tree
    must be entered into the result matrix.

    Strategy: The level order traversal of the tree can be represented
    by an array where each index represents a certain level of the tree
    in ascending order where 0 is the root of the tree.

    We make a recursive function that receives the node and current level/height
    of the tree. The function pushes the value of the node to the
    appropriate index of the 2D array.
*/
const levelOrder = (root: Node): number[][] => {
    let result: number[][] = [];

    const recurse = (n: Node, level: number): void => {
        if (!n) return;
        if (result[level]) result[level].push(n.val);
        else result[level] = [n.val];

        recurse(n.left, level + 1);
        recurse(n.right, level + 1);
    }
    recurse(root, 0);
    return result;
}

/*  Iterative Analysis

    Time and Space Complexity similar to recursive method.

    Strategy: This strategy uses a queue. Starting with the root node,
    we push it into the queue.

    We push all the children nodes of the current level onto the
    queue and add them to the result array level by level.
*/
const levelOrderB = (root: Node): number[][] => {
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
