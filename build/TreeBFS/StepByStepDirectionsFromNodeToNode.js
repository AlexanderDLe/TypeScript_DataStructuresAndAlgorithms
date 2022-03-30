"use strict";
/**
 * 2096. Step-By-Step Directions Form a Binary Tree Node to Another
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const getDirectionsBFS = (root, startValue, destValue) => {
    const getStartNodeAndParentsMap = () => {
        const map = {};
        let node = null;
        const DFS = (n, parent) => {
            if (!n)
                return;
            if (n.val === startValue)
                node = n;
            map[n.val] = parent;
            DFS(n.left, n);
            DFS(n.right, n);
        };
        DFS(root, null);
        return [node, map];
    };
    const [startNode, parentMap] = getStartNodeAndParentsMap();
    const visited = new Set();
    const queue = [[startNode, '']];
    let count = queue.length;
    while (queue.length) {
        while (count) {
            let [n, directions] = queue.shift();
            if (n.val === destValue)
                return directions;
            visited.add(n.val);
            let parent = parentMap[n.val];
            if (n.left && !visited.has(n.left.val))
                queue.push([n.left, directions + 'L']);
            if (n.right && !visited.has(n.right.val))
                queue.push([n.right, directions + 'R']);
            if (parent && !visited.has(parent.val))
                queue.push([parent, directions + 'U']);
            count--;
        }
        count = queue.length;
    }
    return '';
};
const getDirections = (root, startValue, destValue) => {
    const getLCA = (n) => {
        if (!n)
            return n;
        if (n.val === startValue || n.val === destValue)
            return n;
        let left = getLCA(n.left);
        let right = getLCA(n.right);
        if (left && right)
            return n;
        if (!left)
            return right;
        else
            return left;
    };
    const getPath = (n, val, directions) => {
        if (!n)
            return null;
        if (n.val === val)
            return directions;
        let left = getPath(n.left, val, directions + 'L');
        let right = getPath(n.right, val, directions + 'R');
        return left || right;
    };
    const LCA = getLCA(root);
    const pathToStart = getPath(LCA, startValue, '');
    const pathToDest = getPath(LCA, destValue, '');
    const convertedStartPath = 'U'.repeat(pathToStart.length);
    return convertedStartPath + pathToDest;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(5);
    t.left = new TreeClass_1.TreeNode(1);
    t.right = new TreeClass_1.TreeNode(2);
    t.left.left = new TreeClass_1.TreeNode(3);
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.right = new TreeClass_1.TreeNode(4);
    console.log(getDirections(t, 4, 6));
};
