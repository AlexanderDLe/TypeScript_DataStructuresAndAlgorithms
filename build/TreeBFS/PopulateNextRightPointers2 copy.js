"use strict";
/**
 * 116. Populating Next Right Pointers In Each Node 2
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const populateRight2 = (root) => {
    if (!root)
        return root;
    const queue = [root];
    let count = 1;
    while (queue.length) {
        let prev = null;
        while (count) {
            let n = queue.shift();
            if (prev)
                prev.next = n;
            prev = n;
            n.left && queue.push(n.left);
            n.right && queue.push(n.right);
            count--;
        }
        count = queue.length;
    }
    return root;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.right = new TreeClass_1.TreeNode(7);
    console.log(populateRight2(t));
};
