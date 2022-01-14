"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const pathWithGivenSequence = (root, sequence) => {
    let result = false;
    const DFS = (n, i) => {
        if (!n)
            return;
        if (n.value !== sequence[i])
            return;
        DFS(n.left, i + 1);
        DFS(n.right, i + 1);
        if (!n.left && !n.right && i === sequence.length - 1) {
            result = true;
        }
    };
    DFS(root, 0);
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(7);
    t1.right = new TreeClass_1.TreeNode(9);
    t1.right.left = new TreeClass_1.TreeNode(2);
    t1.right.right = new TreeClass_1.TreeNode(9);
    const sequence1 = [1, 9, 9];
    const t2 = new TreeClass_1.TreeNode(1);
    t2.left = new TreeClass_1.TreeNode(0);
    t2.right = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(1);
    t2.right.left = new TreeClass_1.TreeNode(6);
    t2.right.right = new TreeClass_1.TreeNode(5);
    const sequence2 = [1, 0, 7];
    const sequence3 = [1, 1, 6];
    console.log(pathWithGivenSequence(t1, sequence1));
    console.log(pathWithGivenSequence(t2, sequence2));
    console.log(pathWithGivenSequence(t2, sequence3));
};
