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
const minHeightBST = (array) => {
    const build = (start, end) => {
        if (start > end)
            return null;
        let mid = Math.floor(start + (end - start) / 2);
        let val = array[mid];
        let node = new BST(val);
        node.left = build(start, mid - 1);
        node.right = build(mid + 1, end);
        return node;
    };
    return build(0, array.length - 1);
};
exports.default = () => {
    const array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
    console.log(minHeightBST(array));
};
