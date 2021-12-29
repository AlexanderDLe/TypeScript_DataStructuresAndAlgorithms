"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 105. Construct Binary Tree From Preorder and Inorder Traversal
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const buildTreeA = (preorder, inorder) => {
    let map = {};
    for (let i = 0; i < preorder.length; i++)
        map[preorder[i]] = i;
    const findRootIndex = (s, e) => {
        let index = Infinity;
        for (let i = s; i <= e; i++) {
            index = Math.min(index, map[inorder[i]]);
        }
        return inorder.indexOf(preorder[index]);
    };
    const build = (start, end) => {
        if (start > end)
            return null;
        let i = findRootIndex(start, end);
        let n = new TreeClass_1.TreeNode(inorder[i]);
        n.left = build(start, i - 1);
        n.right = build(i + 1, end);
        return n;
    };
    return build(0, preorder.length - 1);
};
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
        console.log(t.val);
        console.log(`t.left = build(${preStart} + 1, ${inStart}, ${rootIndex} - 1)`);
        console.log(`t.right = build(${preStart} + ${numsLeft} + 1, ${rootIndex} + 1, ${inEnd})\n`);
        t.left = build(preStart + 1, inStart, rootIndex - 1);
        t.right = build(preStart + numsLeft + 1, rootIndex + 1, inEnd);
        return t;
    };
    return build(0, 0, inorder.length - 1);
};
const buildTree = (preorder, inorder) => {
    let preorderIndexMap = {};
    let inorderIndexMap = {};
    for (let i = 0; i < preorder.length; i++) {
        let currentPreorderNum = preorder[i];
        let currentInorderNum = inorder[i];
        preorderIndexMap[currentPreorderNum] = i;
        inorderIndexMap[currentInorderNum] = i;
    }
    const build = (start, end) => {
        if (start >= end)
            return null;
        // console.log(`start: ${start}, end: ${end}`)
        let rootIndex = Infinity;
        let rootValue = Infinity;
        for (let i = start; i < end; i++) {
            let currValue = inorder[i];
            let preorderIndexOfCurrValue = preorderIndexMap[currValue];
            if (preorderIndexOfCurrValue < rootIndex) {
                rootIndex = preorderIndexOfCurrValue;
                rootValue = currValue;
            }
        }
        let inorderIndexOfRoot = inorderIndexMap[rootValue];
        // console.log(`inorderIndexOfRoot: ${inorderIndexOfRoot}, rootIndex: ${rootIndex}, rootValue: ${rootValue}\n`)
        let node = new TreeClass_1.TreeNode(rootValue);
        node.left = build(start, inorderIndexOfRoot);
        node.right = build(inorderIndexOfRoot + 1, end);
        return node;
    };
    return build(0, preorder.length);
};
exports.default = () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    // BinaryPreorderTraversal(buildTreeSlicing(preorder, inorder));
    // BinaryPreorderTraversal(buildTreeIndexing(preorder, inorder));
    (0, TreeClass_1.BinaryPreorderTraversal)(buildTree(preorder, inorder));
};
