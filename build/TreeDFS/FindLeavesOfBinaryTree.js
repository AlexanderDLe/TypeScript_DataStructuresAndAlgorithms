"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const findLeaves = (root) => {
    if (!root)
        return [];
    const result = [];
    const DFS = (n, subarr) => {
        if (!n)
            return false;
        let left = DFS(n.left, subarr);
        let right = DFS(n.right, subarr);
        if (!n.left && !n.right)
            return true;
        if (left) {
            subarr.push(n.left.val);
            n.left = null;
        }
        if (right) {
            subarr.push(n.right.val);
            n.right = null;
        }
        return false;
    };
    while (root.left || root.right) {
        const subarr = [];
        DFS(root, subarr);
        result.push(subarr);
    }
    result.push([root.val]);
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(2);
    t1.right = new TreeClass_1.TreeNode(3);
    t1.left.left = new TreeClass_1.TreeNode(4);
    t1.left.right = new TreeClass_1.TreeNode(5);
    console.log(findLeaves(t1));
};
