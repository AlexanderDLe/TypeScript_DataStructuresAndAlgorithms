"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryPreorderTraversal = exports.TreeNodeNext = exports.TreeNode = void 0;
class TreeNode {
    constructor(val) {
        this.val = val;
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
class TreeNodeNext {
    constructor(val) {
        this.val = val;
        this.value = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}
exports.TreeNodeNext = TreeNodeNext;
const BinaryPreorderTraversal = (root) => {
    let str = '';
    const recurse = (root) => {
        if (!root)
            return;
        let valueVar = root.val || root.value;
        str += valueVar + ' | ';
        recurse(root.left);
        recurse(root.right);
    };
    recurse(root);
    console.log(str);
};
exports.BinaryPreorderTraversal = BinaryPreorderTraversal;
