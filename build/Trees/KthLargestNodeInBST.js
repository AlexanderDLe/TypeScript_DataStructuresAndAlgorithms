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
const kthLargestNodeInBST = (tree, k) => {
    let result = 0;
    const DFS = (n) => {
        if (!n || !k)
            return;
        DFS(n.right);
        k--;
        if (!k)
            result = n.value;
        DFS(n.left);
    };
    DFS(tree);
    return result;
};
exports.default = () => {
    const t = new BST(15);
    t.left = new BST(5);
    t.right = new BST(20);
    t.left.left = new BST(2);
    t.left.right = new BST(5);
    t.right.left = new BST(17);
    t.right.right = new BST(22);
    t.left.left.left = new BST(1);
    let k = 3;
    console.log(kthLargestNodeInBST(t, k));
};
