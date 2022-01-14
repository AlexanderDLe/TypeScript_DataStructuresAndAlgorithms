"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const allPathsForASum = (root, sum) => {
    let result = [];
    const DFS = (n, currSum, subarr) => {
        if (!n)
            return;
        subarr = [...subarr, n.value];
        currSum += n.value;
        DFS(n.left, currSum, subarr);
        DFS(n.right, currSum, subarr);
        if (!n.left && !n.right && currSum === sum) {
            result.push(subarr);
        }
    };
    DFS(root, 0, []);
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(7);
    t1.right = new TreeClass_1.TreeNode(9);
    t1.left.left = new TreeClass_1.TreeNode(4);
    t1.left.right = new TreeClass_1.TreeNode(5);
    t1.right.left = new TreeClass_1.TreeNode(2);
    t1.right.right = new TreeClass_1.TreeNode(7);
    const t2 = new TreeClass_1.TreeNode(12);
    t2.left = new TreeClass_1.TreeNode(7);
    t2.right = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(4);
    t2.right.left = new TreeClass_1.TreeNode(10);
    t2.right.right = new TreeClass_1.TreeNode(5);
    console.log(allPathsForASum(t1, 12));
    console.log(allPathsForASum(t2, 23));
};
