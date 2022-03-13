"use strict";
/**
 * 297. Serialize and Deserialize Binary Tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
const Utilities_1 = require("../utils/Utilities");
const serializeRef = (root) => {
    let string = '';
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
    return `${string}`;
};
const deserializeRef = (data) => {
    let arr = data.split(',');
    arr.pop();
    (0, Utilities_1.PrintArray)(arr);
    let index = 0;
    const build = () => {
        if (index === arr.length)
            return;
        let node = null;
        let curr = arr[index];
        if (curr !== 'null') {
            let val = Number(curr);
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
const serializeTooSlow = (root) => {
    if (!root)
        return 'null';
    let result = '';
    const DFS = (n) => {
        if (!n)
            return;
        result += n.val;
        result += '[';
        if (n.left)
            DFS(n.left);
        else
            result += 'null';
        result += ']';
        result += '[';
        if (n.right)
            DFS(n.right);
        else
            result += 'null';
        result += ']';
    };
    DFS(root);
    return result;
};
const deserializeTooSlow = (data) => {
    // Mistake: use new string argument - not original data because the string changes
    const getBracketContents = (str, index) => {
        let stack = ['['];
        index++;
        let i = index;
        while (stack.length) {
            let curr = str[index];
            if (curr === ']')
                stack.pop();
            if (curr === '[')
                stack.push('[');
            index++;
        }
        let content = str.substring(i, index - 1);
        return { index, content };
    };
    const DFS = (str) => {
        if (str === 'null')
            return null;
        let i = 0;
        while (!isNaN(Number(str[i])))
            i++;
        let num = Number(str.substring(0, i));
        let node = new TreeClass_1.TreeNode(num);
        let { index, content: leftContent } = getBracketContents(str, i);
        let { content: rightContent } = getBracketContents(str, index);
        node.left = DFS(leftContent);
        node.right = DFS(rightContent);
        return node;
    };
    return DFS(data);
};
const serialize = (root) => {
    let result = '';
    const DFS = (n) => {
        if (!n) {
            result += 'null,';
            return;
        }
        result += `${n.val},`;
        DFS(n.left);
        DFS(n.right);
    };
    DFS(root);
    return result;
};
const deserialize = (data) => {
    const arr = data.split(',');
    arr.pop();
    let index = 0;
    const build = () => {
        if (index === arr.length)
            return;
        if (arr[index] === 'null') {
            index++;
            return null;
        }
        let num = Number(arr[index]);
        let node = new TreeClass_1.TreeNode(num);
        index++;
        node.left = build();
        node.right = build();
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
    console.log('\nSerialized Result:\n', serialized);
    let deserialized = deserialize(serialized);
    console.log('\nDeserialized Result: ');
    (0, TreeClass_1.BinaryPreorderTraversal)(deserialized);
};
