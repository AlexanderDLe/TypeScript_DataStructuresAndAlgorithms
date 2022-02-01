/**
 *  98. Validate Binary Search Tree
 */
import { TreeNode } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

type bound = number | null;
const isValidBSTA = (root: Node): boolean => {
    if (!root) return true;
    const DFS = (root: Node, min: bound, max: bound): boolean => {
        if (!root) return true;
        if (min !== null && root.val <= min) return false;
        if (max !== null && root.val >= max) return false;
        return DFS(root.left, min, root.val) && DFS(root.right, root.val, max);
    };

    return DFS(root, null, null);
};

type BST = Node | null;
const isValidBST = (root: Node): boolean => {
    if (!root) return true;
    
    const DFS = (n: BST, min: number, max: number): boolean => {
        if (!n) return true;
        if (n.value < min || n.value >= max) return false;

        let left = DFS(n.left, min, n.value);
        let right = DFS(n.right, n.value, max);

        return left && right;
    }

    return DFS(root, -Infinity, Infinity);
}

export default () => {
    const t1 = new TreeNode(2);
    t1.left = new TreeNode(1);
    t1.right = new TreeNode(3);

    const t2 = new TreeNode(5);
    t2.left = new TreeNode(1);
    t2.right = new TreeNode(4);
    t2.right.left = new TreeNode(3);
    t2.right.right = new TreeNode(6);

    console.log(isValidBST(t1));
};
