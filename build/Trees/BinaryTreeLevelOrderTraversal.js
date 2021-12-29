"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 102. Binary Tree Level Order Traversal
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
const Utilities_1 = require("../utils/Utilities");
/*  Recursion Analysis

    Time Complexity: O(n). Each node in the visited one time.
    If a tree has 3 nodes, then there are 3 traversals.

    Space Complexity: O(n). The value of each node of the tree
    must be entered into the result matrix.

    Strategy: The level order traversal of the tree can be represented
    by an array where each index represents a certain level of the tree
    in ascending order where 0 is the root of the tree.

    We make a recursive function that receives the node and current level/height
    of the tree. The function pushes the value of the node to the
    appropriate index of the 2D array.
*/
const levelOrderA = (root) => {
    let result = [];
    const recurse = (n, level) => {
        if (!n)
            return;
        if (result[level])
            result[level].push(n.val);
        else
            result[level] = [n.val];
        recurse(n.left, level + 1);
        recurse(n.right, level + 1);
    };
    recurse(root, 0);
    return result;
};
/*  Iterative Analysis

    Time and Space Complexity similar to recursive method.

    Strategy: This strategy uses a queue. Starting with the root node,
    we push it into the queue.

    We push all the children nodes of the current level onto the
    queue and add them to the result array level by level.
*/
const levelOrderB = (root) => {
    if (!root)
        return [];
    let result = [];
    let queue = [];
    queue.push(root);
    let count = 1;
    while (queue.length) {
        let level = [];
        while (count) {
            let n = queue.shift();
            level.push(n.val);
            if (n.left)
                queue.push(n.left);
            if (n.right)
                queue.push(n.right);
            count--;
        }
        result.push(level);
        count = queue.length;
    }
    return result;
};
const levelOrder = (root) => {
    if (!root)
        return [];
    let result = [];
    let queue = [root];
    let count = 1;
    while (queue.length) {
        let level = [];
        while (count) {
            let item = queue.shift();
            level.push(item.val);
            if (item.left)
                queue.push(item.left);
            if (item.right)
                queue.push(item.right);
            count--;
        }
        result.push(level);
        count = queue.length;
    }
    return result;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(9);
    t.right = new TreeClass_1.TreeNode(20);
    t.right.left = new TreeClass_1.TreeNode(15);
    t.right.right = new TreeClass_1.TreeNode(7);
    (0, Utilities_1.PrintMatrix)(levelOrder(t));
};
