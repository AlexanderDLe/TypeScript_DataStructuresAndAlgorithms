"use strict";
/**
 * 113. Path Sum 2
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const pathOfMaximumSum = (root, targetSum) => {
    const result = [];
    const DFS = (n, sum, subarr) => {
        if (!n)
            return;
        subarr.push(n.val);
        sum += n.val;
        DFS(n.left, sum, subarr);
        DFS(n.right, sum, subarr);
        if (sum === targetSum && !n.left && !n.right) {
            result.push([...subarr]);
        }
        subarr.pop();
    };
    DFS(root, 0, []);
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(5);
    t1.left = new TreeClass_1.TreeNode(4);
    t1.right = new TreeClass_1.TreeNode(8);
    t1.left.left = new TreeClass_1.TreeNode(11);
    t1.left.left.left = new TreeClass_1.TreeNode(7);
    t1.left.left.right = new TreeClass_1.TreeNode(2);
    t1.right.left = new TreeClass_1.TreeNode(13);
    t1.right.right = new TreeClass_1.TreeNode(4);
    t1.right.right.left = new TreeClass_1.TreeNode(5);
    t1.right.right.right = new TreeClass_1.TreeNode(1);
    console.log(pathOfMaximumSum(t1, 22));
    console.log(pathOfMaximumSum(t1, 18));
};
