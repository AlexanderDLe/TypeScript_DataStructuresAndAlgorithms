/**
 *  108. Convert Sorted Array Into Binary Search Tree
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const sortedArrayToBST = (nums: number[]): Node => {
    if (!nums.length) return null;

    const createNode = (left: number, right: number): Node => {
        if (left > right) return null;
        let mid = Math.floor((left + right) / 2);
        let n = new TreeNode(nums[mid]);
        n.left = createNode(left, mid - 1);
        n.right = createNode(mid + 1, right);
        return n;
    };
    return createNode(0, nums.length - 1);
};

export default () => {
    const nums = [-10, -3, 0, 5, 9];
    BinaryPreorderTraversal(sortedArrayToBST(nums));
};
