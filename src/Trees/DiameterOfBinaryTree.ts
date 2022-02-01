/**
 * 543. Diameter of Binary Tree
 *
 * A diameter of the binary tree is determined by the
 * longest continuous line of nodes through the tree.
 *
 * A diameter of the current node is determined by the
 * sum of the heights of its left and right subtrees.
 *
 * Recurse through the tree and eventually return the
 * greatest value (aka diameter) seen.
 */
import { TreeNode } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const diameterOfBinaryTreeA = (root: Node): number => {
    let diameter = 0;

    const findHeight = (n: Node): number => {
        if (!n) return 0;
        return Math.max(findHeight(n.left), findHeight(n.right)) + 1;
    }

    const DFS = (n: Node): void => {
        if (!n) return;
        let currHeight = findHeight(n.left) + findHeight(n.right);
        diameter = Math.max(diameter, currHeight);

        DFS(n.left);
        DFS(n.right);
    }

    DFS(root);
    return diameter;
}

const diameterOfBinaryTreeB = (root: Node): number => {
    let maxDiameter = 0;

    const DFS = (n: Node): number => {
        if (!n) return 0;

        let left = DFS(n.left);
        let right = DFS(n.right);

        maxDiameter = Math.max(maxDiameter, left + right);

        console.log(`n: ${n.val}, left: ${left}, right: ${right}, maxDia: ${maxDiameter}, return: ${Math.max(left + 1, right + 1)}`)

        return Math.max(left + 1, right + 1);
    }

    DFS(root);

    return maxDiameter;
}

const diameterOfBinaryTreeOld = (root: Node): number => {
    const findHeight = (n: Node): number => {
        if (!n) return 0;
        return Math.max(findHeight(n.left), findHeight(n.right)) + 1;
    };
    if (!root) return 0;
    const currentDiameter = findHeight(root.left) + findHeight(root.right);
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);
    return Math.max(currentDiameter, Math.max(leftDiameter, rightDiameter));
};

type BinaryTree = Node;
const diameterOfBinaryTree = (root: Node): number => {
    let maxDiameter = 0;
    
    const recurse = (n: BinaryTree): number => {
        if (!n) return 0;
        let left = recurse(n.left);
        let right = recurse(n.right);

        maxDiameter = Math.max(maxDiameter, left + right);

        return Math.max(left + 1, right + 1);
    }

    recurse(root);
    return maxDiameter;
}

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.right = new TreeNode(6);
    t.right.right.right = new TreeNode(7);
    // BinaryPreorderTraversal(t);
    console.log(diameterOfBinaryTree(t));
};
