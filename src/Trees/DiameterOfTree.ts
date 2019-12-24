import { TreeNode } from './TreeClass';

export default function diameterOfBinaryTree<T>(
    root: TreeNode<T> | null
): number {
    function getHeightAndDiameter(node: TreeNode<T> | null): [number, number] {
        if (node === null) return [-1, -1];

        const [leftHeight, leftDiameter] = getHeightAndDiameter(node.left);
        const [rightHeight, rightDiameter] = getHeightAndDiameter(node.right);

        return [
            Math.max(leftHeight, rightHeight) + 1,
            Math.max(leftHeight + rightHeight + 2, leftDiameter, rightDiameter)
        ];
    }

    if (!root) return 0;

    return getHeightAndDiameter(root)[1];
}
