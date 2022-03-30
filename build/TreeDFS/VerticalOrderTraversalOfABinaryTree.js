"use strict";
/**
 * 987. Vertical Order Traversal of a Binary Tree
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
;
const verticalTraversal = (root) => {
    const map = {};
    const DFS = (n, row, col) => {
        if (!n)
            return;
        if (!(col in map))
            map[col] = {};
        let colMap = map[col];
        if (!(row in colMap))
            colMap[row] = [];
        colMap[row].push(n.val);
        DFS(n.left, row + 1, col - 1);
        DFS(n.right, row + 1, col + 1);
    };
    DFS(root, 0, 0);
    const result = [];
    let sortedColKeys = Object.keys(map).sort((a, b) => Number(a) - Number(b));
    for (let col of sortedColKeys) {
        let rowObjects = map[col];
        let res = [];
        let sortedRowKeys = Object.keys(rowObjects).sort((a, b) => Number(a) - Number(b));
        for (let row of sortedRowKeys) {
            let arr = rowObjects[row].sort((a, b) => a - b);
            res = [...res, ...arr];
        }
        result.push(res);
    }
    return result;
};
exports.default = () => {
    const t1 = new TreeClass_1.TreeNode(3);
    t1.left = new TreeClass_1.TreeNode(9);
    t1.right = new TreeClass_1.TreeNode(20);
    t1.right.left = new TreeClass_1.TreeNode(15);
    t1.right.right = new TreeClass_1.TreeNode(7);
    const t2 = new TreeClass_1.TreeNode(1);
    t2.left = new TreeClass_1.TreeNode(2);
    t2.right = new TreeClass_1.TreeNode(3);
    t2.left.left = new TreeClass_1.TreeNode(4);
    t2.left.right = new TreeClass_1.TreeNode(6);
    t2.right.left = new TreeClass_1.TreeNode(5);
    t2.right.right = new TreeClass_1.TreeNode(7);
    console.log(verticalTraversal(t1));
    console.log(verticalTraversal(t2));
};
