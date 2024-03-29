"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 116. Populating Next Right Pointers in Each Node
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
function connect(root) {
    if (!root)
        return null;
    root.next = null;
    const link = (n) => {
        let L = n.left;
        let R = n.right;
        while (L) {
            L.next = R;
            L = L.right;
            R = R.left;
        }
    };
    const recurse = (n) => {
        if (!n)
            return;
        link(n);
        recurse(n.left);
        recurse(n.right);
    };
    let set = new Set([1, 2, 3]);
    console.log((set.size));
    recurse(root);
    return root;
}
;
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.right = new TreeClass_1.TreeNode(7);
    (0, TreeClass_1.BinaryPreorderTraversal)(connect(t));
};
