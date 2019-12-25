"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeClass_1 = require("./TreeClass");
var Solution = function (root, L, R) {
    var result = 0;
    var traversalSum = function (n) {
        if (!n)
            return;
        if (n.val >= L && n.val <= R) {
            result += n.val;
        }
        traversalSum(n.left);
        traversalSum(n.right);
    };
    traversalSum(root);
    return result;
};
var RangeSum = function () {
    var t = new TreeClass_1.TreeNode(10);
    t.left = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(15);
    t.left.left = new TreeClass_1.TreeNode(3);
    t.left.right = new TreeClass_1.TreeNode(7);
    t.right.right = new TreeClass_1.TreeNode(18);
    var L = 7;
    var R = 15;
    console.log(Solution(t, L, R));
};
exports.default = RangeSum;
