"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
exports.BinaryPreorderTraversal = function (root) {
    var str = '';
    var recurse = function (root) {
        if (!root)
            return;
        str += root.val + ' | ';
        recurse(root.left);
        recurse(root.right);
    };
    recurse(root);
    console.log(str);
};
