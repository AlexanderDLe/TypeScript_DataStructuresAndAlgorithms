"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 102. Binary Tree Level Order Traversal
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const Utilities_1 = require("../utils/Utilities");
const zigzagLevelOrder = (root) => {
    if (!root)
        return [];
    let result = [];
    let RS = [root];
    let LS = [];
    let level = 0;
    let n = null;
    while (RS.length || LS.length) {
        while (RS.length) {
            console.log(RS);
            n = RS.pop();
            if (result[level])
                result[level].push(n.val);
            else
                result[level] = [n.val];
            if (n.left)
                LS.push(n.left);
            if (n.right)
                LS.push(n.right);
        }
        level++;
        while (LS.length) {
            n = LS.pop();
            if (result[level])
                result[level].push(n.val);
            else
                result[level] = [n.val];
            if (n.right)
                RS.push(n.right);
            if (n.left)
                RS.push(n.left);
        }
        level++;
    }
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(4);
    // t.right.left = new TreeNode(15);
    // t.right.right = new TreeNode(5);
    Utilities_1.PrintMatrix(zigzagLevelOrder(t));
};
