"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const levelOrderSuccessor = (root, key) => {
    let queue = [];
    queue.push(root);
    let count = queue.length;
    let keyFound = false;
    while (queue.length) {
        while (count) {
            let n = queue.shift();
            if (n.value === key)
                keyFound = true;
            else if (keyFound)
                return n.value;
            if (n.left)
                queue.push(n.left);
            if (n.right)
                queue.push(n.right);
            count--;
        }
        count = queue.length;
    }
    return 0;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(1);
    t1.left = new TreeClass_1.TreeNode(2);
    t1.right = new TreeClass_1.TreeNode(3);
    t1.left.left = new TreeClass_1.TreeNode(4);
    t1.left.right = new TreeClass_1.TreeNode(5);
    const t2 = new TreeClass_1.TreeNode(12);
    t2.left = new TreeClass_1.TreeNode(7);
    t2.right = new TreeClass_1.TreeNode(1);
    t2.left.right = new TreeClass_1.TreeNode(9);
    t2.right.left = new TreeClass_1.TreeNode(10);
    t2.right.right = new TreeClass_1.TreeNode(5);
    console.log(levelOrderSuccessor(t1, 3));
    console.log(levelOrderSuccessor(t2, 9));
    console.log(levelOrderSuccessor(t2, 12));
};
