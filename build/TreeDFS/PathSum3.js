"use strict";
/**
 * 437. Path Sum 3
 *
 * targetSum = 8
 *
 * 2 > 10 >  3 >  5 >  4
 *
 * 2 > 12 > 15 > 20 > 24
 *
 *  2: 1          ^-- In this example, we should know there is a valid path (3 + 5 = 8)
 * 12: 1              At value 20, a valid path sum exists if there exists on the outerpath,
 * 15: 1              a sum of 20 - target.
 * 20: 1
 *                    So we check if a path exists. 20 - 8 = 12. We have encountered 12 before!
 *                    So that previous path + target sum means we should be able to arrive at current.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const pathOfMaximumSum = (root, targetSum) => {
    let map = { 0: 1 };
    let result = 0;
    const DFS = (n, sum) => {
        if (!n)
            return;
        let currSum = sum + n.val;
        let desiredOuterSum = currSum - targetSum;
        if (map[desiredOuterSum])
            result += map[desiredOuterSum];
        map[currSum] = (map[currSum] || 0) + 1;
        DFS(n.left, currSum);
        DFS(n.right, currSum);
        map[currSum]--;
    };
    DFS(root, 0);
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(10);
    t1.left = new TreeClass_1.TreeNode(5);
    t1.right = new TreeClass_1.TreeNode(-3);
    t1.right.right = new TreeClass_1.TreeNode(11);
    t1.left.left = new TreeClass_1.TreeNode(3);
    t1.left.right = new TreeClass_1.TreeNode(2);
    t1.left.left.left = new TreeClass_1.TreeNode(3);
    t1.left.left.right = new TreeClass_1.TreeNode(-2);
    t1.left.right.right = new TreeClass_1.TreeNode(1);
    console.log(pathOfMaximumSum(t1, 8));
    console.log(pathOfMaximumSum(t1, 18));
    console.log(pathOfMaximumSum(t1, 21));
    console.log(pathOfMaximumSum(t1, 3));
};
