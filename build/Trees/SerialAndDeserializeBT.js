"use strict";
/**
 * 297. Serialize and Deserialize Binary Tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const Utilities_1 = require("../utils/Utilities");
const serialize = (root) => {
    let string = '[';
    const DFS = (n) => {
        if (!n) {
            string += 'null,';
            return;
        }
        string += `${n.val},`;
        DFS(n.left);
        DFS(n.right);
    };
    DFS(root);
    return `${string}]`;
};
const deserialize = (data) => {
    let root = null;
    data = data.replace(/[\[\]]/g, '');
    let arr = data.split(',');
    arr.pop();
    console.log('\nArray: ');
    (0, Utilities_1.PrintArray)(arr);
    let index = 0;
    const build = () => {
        if (index === arr.length)
            return;
        let node = null;
        let curr = arr[index];
        console.log(curr);
        if (arr[index] !== 'null') {
            let val = Number(arr[index]);
            node = new TreeClass_1.TreeNode(val);
        }
        index++;
        if (node) {
            node.left = build();
            node.right = build();
        }
        return node;
    };
    return build();
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(1);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(3);
    t.right.left = new TreeClass_1.TreeNode(4);
    t.right.right = new TreeClass_1.TreeNode(5);
    console.log('Tree: ');
    (0, TreeClass_1.BinaryPreorderTraversal)(t);
    let serialized = serialize(t);
    console.log('\nSerialized Result: ', serialized);
    let deserialized = deserialize(serialized);
    console.log('\nDeserialized Result: ', deserialized);
    (0, TreeClass_1.BinaryPreorderTraversal)(deserialized);
};
