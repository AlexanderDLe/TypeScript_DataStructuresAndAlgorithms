"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
exports.BinaryPreorderTraversal = (root) => {
    let str = '';
    const recurse = (root) => {
        if (!root)
            return;
        str += root.val + ' | ';
        recurse(root.left);
        recurse(root.right);
    };
    recurse(root);
    console.log(str);
};
