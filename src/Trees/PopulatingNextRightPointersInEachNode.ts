/**
 * 116. Populating Next Right Pointers in Each Node
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;
function connect(root: Node): Node {
    if (!root) return null;
    root.next = null;

    const link = (n: Node): void => {
        let L: Node = n.left;
        let R: Node = n.right;

        while (L) {
            L.next = R;
            L = L.right;
            R = R.left;
        }
    }
    const recurse = (n: Node): void => {
        if (!n) return;
        link(n);
        recurse(n.left);
        recurse(n.right);
    }

    let set = new Set([1, 2, 3]);
    console.log((set.size));

    recurse(root);
    return root;
};

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(7);
    
    BinaryPreorderTraversal(connect(t));
};
