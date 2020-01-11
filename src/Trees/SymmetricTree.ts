/**
 * 101. Symmetric Tree
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;
const isSymmetric = (root: Node): boolean => {
    if (!root) return true;
    let result: boolean = true;

    const DFS = (l: Node, r: Node): void => {
        if (!l && !r) return;
        if ((!l && r) || (l && !r) || l.val !== r.val) {
            result = false;
            return;
        }
        DFS(l.left, r.right);
        DFS(r.left, l.right);
    };

    DFS(root.left, root.right);
    return result;
};

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(2);
    t.left.left = new TreeNode(3);
    t.left.right = new TreeNode(4);
    t.right.left = new TreeNode(4);
    t.right.right = new TreeNode(3);

    BinaryPreorderTraversal(t);
    console.log(isSymmetric(t));
};
