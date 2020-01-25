"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 105. Construct Binary Tree From Preorder and Inorder Traversal
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const buildTreeSlicing = (preorder, inorder) => {
    const build = (preorder, inorder) => {
        if (!preorder.length && !inorder.length)
            return null;
        const t = new TreeClass_1.TreeNode(preorder[0]);
        const rootIndex = inorder.indexOf(preorder[0]);
        const leftPre = preorder.slice(1, rootIndex + 1);
        const rightPre = preorder.slice(rootIndex + 1, preorder.length);
        const leftIn = inorder.slice(0, rootIndex);
        const rightIn = inorder.slice(rootIndex + 1, inorder.length);
        t.left = build(leftPre, leftIn);
        t.right = build(rightPre, rightIn);
        return t;
    };
    return build(preorder, inorder);
};
const buildTreeIndexing = (preorder, inorder) => {
    const map = {};
    for (let i = 0; i < inorder.length; i++)
        map[inorder[i]] = i;
    const build = (preStart, inStart, inEnd) => {
        if (preStart > preorder.length - 1 || inStart > inEnd)
            return null;
        const t = new TreeClass_1.TreeNode(preorder[preStart]);
        const rootIndex = map[preorder[preStart]];
        const numsLeft = rootIndex - inStart;
        t.left = build(preStart + 1, inStart, rootIndex - 1);
        t.right = build(preStart + numsLeft + 1, rootIndex + 1, inEnd);
        return t;
    };
    //
    return build(0, 0, inorder.length - 1);
};
exports.default = () => {
    const preorder = [3, 9, 1, 2, 20, 15, 7];
    const inorder = [1, 9, 2, 3, 15, 20, 7];
    // BinaryPreorderTraversal(buildTreeSlicing(preorder, inorder));
    TreeClass_1.BinaryPreorderTraversal(buildTreeIndexing(preorder, inorder));
};
