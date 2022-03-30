"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1650. Lowest Common Ancestor of a Binary Tree 3
 *
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const lowestCommonAncestor = (p, q) => {
    const getDistanceToRoot = (n) => {
        let count = 0;
        while (n) {
            n = n.parent;
            count++;
        }
        return count;
    };
    let pDepth = getDistanceToRoot(p);
    let qDepth = getDistanceToRoot(q);
    while (pDepth !== qDepth) {
        if (pDepth > qDepth) {
            pDepth--;
            p = p.parent;
        }
        if (qDepth > pDepth) {
            qDepth--;
            q = q.parent;
        }
    }
    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }
    return p;
};
exports.default = () => {
    const t3 = new TreeClass_1.TreeNode(3);
    const t5 = new TreeClass_1.TreeNode(5);
    const t1 = new TreeClass_1.TreeNode(1);
    const t6 = new TreeClass_1.TreeNode(6);
    const t2 = new TreeClass_1.TreeNode(2);
    const t0 = new TreeClass_1.TreeNode(0);
    const t8 = new TreeClass_1.TreeNode(8);
    const t7 = new TreeClass_1.TreeNode(7);
    const t4 = new TreeClass_1.TreeNode(4);
    t3.left = t5;
    t3.right = t1;
    t5.parent = t3;
    t1.parent = t3;
    t5.left = t6;
    t5.right = t2;
    t6.parent = t5;
    t2.parent = t5;
    t1.left = t0;
    t1.right = t8;
    t0.parent = t1;
    t8.parent = t1;
    t2.left = t7;
    t2.right = t4;
    t7.parent = t2;
    t4.parent = t2;
    (0, TreeClass_1.BinaryPreorderTraversal)(t3);
    console.log(lowestCommonAncestor(t2, t4).val);
};
