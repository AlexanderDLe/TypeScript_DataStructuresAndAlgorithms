/**
 * 114. Flatten Binary Tree To Linked List
 *
 * Flatten tree using recursion:
 * One every node starting from the furthest left (postorder),
 * take left node and insert between the current node and the current right node.
 * reattach the previous right node to the end of the newly attached node.
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

/*  Recursion Analysis

    Time Complexity: O(n^2) you traverse the tree, but also further recursion
    is needed to find the end of the swapped nodes to reattach temp node.

    Space Complexity: O(1) no data structures used.

    Strategy: DFS through the tree. To swap, save the right node onto temp variable.
    Swap left onto right and assign left to null. Iterate towards the end of the
    swapped right node to finally reattach the temp node onto the end.
*/
type Node = TreeNode<number> | null;

const flattenC = (root: Node): void => {
    if (!root) return;
    flatten(root.left);

    let temp: Node = root.right;
    root.right = root.left;
    root.left = null;

    while (root.right) root = root.right;

    root.right = temp;
    flatten(root.right);
}

const flattenA = (root: Node): void => {
    if (!root) return;

    flattenA(root.left);
    flattenA(root.right);

    if (root.left) {
        let reconnect = root.right;
        root.right = root.left;
        root.left = null;

        let n = root.right;

        while (n.right) {
            n = n.right;
        }
        n.right = reconnect;
    }
};

let pre: Node = null;
const flattenB = (root: Node) => {
    if (root == null) return;
    flattenB(root.right);
    flattenB(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
};

const flatten = (root: Node): void => {
    if (!root) return;
    flatten(root.left);
    
    let temp = root.right;
    root.right = root.left;
    root.left = null;
    
    while (root.right) {
        root = root.right;
    }
    root.right = temp;
    
    flatten(root.right);
}


export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(5);
    t.left.left = new TreeNode(3);
    t.left.right = new TreeNode(4);
    t.right.right = new TreeNode(6);

    flatten(t);
    BinaryPreorderTraversal(t);
};
