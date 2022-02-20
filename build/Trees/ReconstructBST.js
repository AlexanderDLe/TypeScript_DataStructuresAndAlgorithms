"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.BST = BST;
const reconstructBST = (preOrderTraversalValues) => {
    let array = preOrderTraversalValues;
    const buildTree = (start, end) => {
        let node = new BST(array[start]);
        let p = start + 1;
        while (array[p] < array[start])
            p++;
        if (array[start + 1] < array[start])
            node.left = buildTree(start + 1, p - 1);
        if (array[p] >= array[start])
            node.right = buildTree(p, end);
        return node;
    };
    return buildTree(0, array.length);
};
exports.default = () => {
    let array = [10, 4, 2, 1, 5, 17, 19, 18];
    console.log(reconstructBST(array));
};
