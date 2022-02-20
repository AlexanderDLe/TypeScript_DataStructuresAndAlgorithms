"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.BinaryTree = BinaryTree;
const validateThreeNodes = (tree) => {
    let isBalanced = true;
    const DFS = (n) => {
        if (!n)
            return 0;
        let left = DFS(n.left);
        let right = DFS(n.right);
        if (Math.abs(left - right) > 1)
            isBalanced = false;
        return Math.max(left + 1, right + 1);
    };
    DFS(tree);
    return isBalanced;
};
exports.default = () => {
    let n5 = new BinaryTree(5);
    let n2 = new BinaryTree(2);
    let n7 = new BinaryTree(7);
    let n1 = new BinaryTree(1);
    let n4 = new BinaryTree(4);
    let n6 = new BinaryTree(6);
    let n8 = new BinaryTree(8);
    let n0 = new BinaryTree(0);
    let n3 = new BinaryTree(3);
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    n5.left = n7;
    n5.right = n8;
    console.log(validateThreeNodes(n1));
};
