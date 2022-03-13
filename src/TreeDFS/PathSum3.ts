/**
 * 437. Path Sum 3
 * 
 * targetSum = 8
 * 
 * 2 > 10 >  3 >  5 >  4
 * 
 * 2 > 12 > 15 > 20 > 24
 * 
 *  2: 1          ^-- In this example, we should know there is a valid path (3 + 5 = 8)
 * 12: 1              At value 20, a valid path sum exists if there exists on the outerpath, 
 * 15: 1              a sum of 20 - target.
 * 20: 1
 *                    So we check if a path exists. 20 - 8 = 12. We have encountered 12 before!
 *                    So that previous path + target sum means we should be able to arrive at current.
*/

import { TreeNode } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const pathOfMaximumSum = (root: Node, targetSum: number): number => {
  let map: any = {0:1};
  let result = 0;

  const DFS = (n:Node, sum:number) => {
    if (!n) return;
    let currSum = sum + n.val;
    let desiredOuterSum = currSum - targetSum;
    if (map[desiredOuterSum]) result += map[desiredOuterSum];
    map[currSum] = (map[currSum] || 0) + 1;

    DFS(n.left, currSum);
    DFS(n.right, currSum);

    map[currSum]--;
  }

  DFS(root, 0);
  return result;
}


export default () => {
  const t1 = new TreeNode(10);
  t1.left = new TreeNode(5);
  t1.right = new TreeNode(-3);
  t1.right.right = new TreeNode(11);
  t1.left.left = new TreeNode(3);
  t1.left.right = new TreeNode(2);
  t1.left.left.left = new TreeNode(3);
  t1.left.left.right = new TreeNode(-2);
  t1.left.right.right = new TreeNode(1);
  
  console.log(pathOfMaximumSum(t1, 8))
  console.log(pathOfMaximumSum(t1, 18))
  console.log(pathOfMaximumSum(t1, 21))
  console.log(pathOfMaximumSum(t1, 3))
};