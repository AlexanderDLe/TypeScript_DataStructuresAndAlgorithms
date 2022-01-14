"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const sumOfPathNumbers = (root) => {
    let result = 0;
    const DFS = (n, str) => {
        if (!n)
            return;
        str += n.value;
        DFS(n.left, str);
        DFS(n.right, str);
        if (!n.left && !n.right) {
            result += Number(str);
        }
    };
    DFS(root, '');
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(7);
    t1.right = new TreeClass_1.TreeNode(9);
    t1.right.left = new TreeClass_1.TreeNode(2);
    t1.right.right = new TreeClass_1.TreeNode(9);
    const t2 = new TreeClass_1.TreeNode(1);
    t2.left = new TreeClass_1.TreeNode(0);
    t2.right = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(1);
    t2.right.left = new TreeClass_1.TreeNode(6);
    t2.right.right = new TreeClass_1.TreeNode(5);
    console.log(sumOfPathNumbers(t1));
    console.log(sumOfPathNumbers(t2));
};
