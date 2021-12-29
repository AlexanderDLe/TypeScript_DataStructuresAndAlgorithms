/**
 * 101. Symmetric Tree
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const isSymmetricOld = (root: Node): boolean => {
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

const isSymmetric = (root: Node): boolean => {
    const DFS = (L: Node, R: Node): boolean => {
        if (!L && !R) return true;
        if (!L || !R) return false;
        if (L.val !== R.val) return false;

        return DFS(L.left, R.right) && DFS(L.right, R.left);
    }

    return DFS(root.left, root.right);
}

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(3);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(null);
    t.right.right = new TreeNode(4);

    BinaryPreorderTraversal(t);
    console.log(isSymmetric(t));
};
