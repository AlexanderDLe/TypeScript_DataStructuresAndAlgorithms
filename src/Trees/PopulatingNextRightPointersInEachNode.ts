/**
 * 105. Construct Binary Tree From Preorder and Inorder Traversal
 */
import { TreeNodeNext, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNodeNext<number> | null;
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
    const t = new TreeNodeNext(1);
    t.left = new TreeNodeNext(2);
    t.right = new TreeNodeNext(3);
    t.left.left = new TreeNodeNext(4);
    t.left.right = new TreeNodeNext(5);
    t.right.left = new TreeNodeNext(6);
    t.right.right = new TreeNodeNext(7);
    
    BinaryPreorderTraversal(connect(t));
};
