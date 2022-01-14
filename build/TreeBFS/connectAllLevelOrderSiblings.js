"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const connectAllLevelOrderSiblings = (root) => {
    let queue = [];
    queue.push(root);
    let count = queue.length;
    let prev = null;
    while (queue.length) {
        while (count) {
            let n = queue.shift();
            if (prev)
                prev.next = n;
            prev = n;
            if (n.left)
                queue.push(n.left);
            if (n.right)
                queue.push(n.right);
            count--;
        }
        count = queue.length;
    }
    return root;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(2);
    t1.right = new TreeClass_1.TreeNode(3);
    t1.left.left = new TreeClass_1.TreeNode(4);
    t1.left.right = new TreeClass_1.TreeNode(5);
    t1.right.left = new TreeClass_1.TreeNode(6);
    t1.right.right = new TreeClass_1.TreeNode(7);
    const t2 = new TreeClass_1.TreeNode(12);
    t2.left = new TreeClass_1.TreeNode(7);
    t2.right = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(9);
    t2.right.left = new TreeClass_1.TreeNode(10);
    t2.right.right = new TreeClass_1.TreeNode(5);
    console.log(connectAllLevelOrderSiblings(t1));
    console.log(connectAllLevelOrderSiblings(t2));
};
