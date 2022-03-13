/**
 * 654. Maximum Binary Tree
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

const construct = (nums: number[]): Node => {
  const getMaxIndex = (L:number, R:number): number => {
    let maxIndex = 0;
    let maxVal = -Infinity;
    for (let i = L; i <= R; i++) {
      let num = nums[i];
      if (num > maxVal) {
        maxVal = num;
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  const build = (L:number, R:number): Node => {
    if (L > R) return null;
    const indexOfMax = getMaxIndex(L, R);
    const numOfMax = nums[indexOfMax];
    const newNode = new TreeNode(numOfMax);

    newNode.left = build(L, indexOfMax - 1);
    newNode.right = build(indexOfMax + 1, R);

    return newNode;
  }

  return build(0, nums.length - 1);
}

export default () => {
  const nums = [3,2,1,6,0,5];
  console.log(construct(nums));
};
