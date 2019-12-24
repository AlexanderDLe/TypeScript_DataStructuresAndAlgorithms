"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function diameterOfBinaryTree(root) {
    function getHeightAndDiameter(node) {
        if (node === null)
            return [-1, -1];
        var _a = getHeightAndDiameter(node.left), leftHeight = _a[0], leftDiameter = _a[1];
        var _b = getHeightAndDiameter(node.right), rightHeight = _b[0], rightDiameter = _b[1];
        return [
            Math.max(leftHeight, rightHeight) + 1,
            Math.max(leftHeight + rightHeight + 2, leftDiameter, rightDiameter)
        ];
    }
    if (!root)
        return 0;
    return getHeightAndDiameter(root)[1];
}
exports.default = diameterOfBinaryTree;
