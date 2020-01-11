/**
 * 543. Diameter of Binary Tree
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const findHeight = (n: Node): number => {
    if (!n) return 0;
    return Math.max(findHeight(n.left), findHeight(n.right)) + 1;
};
const diameterOfBinaryTree = (root: Node): number => {
    if (!root) return 0;
    const currentDiameter = findHeight(root.left) + findHeight(root.right);
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);
    return Math.max(currentDiameter, Math.max(leftDiameter, rightDiameter));
};

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
