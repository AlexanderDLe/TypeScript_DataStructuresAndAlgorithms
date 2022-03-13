"use strict";
/**
 * 863. All Nodes Distance K in Binary Tree
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const distanceK = (root, target, k) => {
    const buildParentsMap = (node) => {
        let map = {};
        const DFS = (n, prev) => {
            if (!n)
                return;
            map[n.val] = prev;
            DFS(n.left, n);
            DFS(n.right, n);
        };
        DFS(node, null);
        return map;
    };
    const queue = [target];
    const parentOf = buildParentsMap(root);
    const visited = new Set();
    let count = queue.length;
    while (queue.length && k) {
        while (count) {
            let n = queue.shift();
            visited.add(n.val);
            let parent = parentOf[n.val];
            if (n.left && !visited.has(n.left.val))
                queue.push(n.left);
            if (n.right && !visited.has(n.right.val))
                queue.push(n.right);
            if (parent && !visited.has(parent.val))
                queue.push(parent);
            count--;
        }
        k--;
        count = queue.length;
        console.log(queue.map(x => x.val));
    }
    if (k)
        return [];
    return queue.map(x => x.val);
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(3);
    t.left = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(1);
    t.left.left = new TreeClass_1.TreeNode(6);
    t.left.right = new TreeClass_1.TreeNode(2);
    t.right.left = new TreeClass_1.TreeNode(0);
    t.right.right = new TreeClass_1.TreeNode(8);
    t.left.right.left = new TreeClass_1.TreeNode(7);
    t.left.right.right = new TreeClass_1.TreeNode(4);
    console.log(distanceK(t, t.left, 2));
};
