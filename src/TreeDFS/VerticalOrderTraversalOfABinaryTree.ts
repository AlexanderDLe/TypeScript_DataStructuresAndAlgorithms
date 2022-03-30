/**
 * 987. Vertical Order Traversal of a Binary Tree
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const verticalTraversal = (root: Node): number[][] => {
  const map: any = {};

  const DFS = (n:Node, row:number, col:number) => {
    if (!n) return;
    if (!(col in map)) map[col] = {};
    let colMap = map[col];
    if (!(row in colMap)) colMap[row] = [];

    colMap[row].push(n.val);

    DFS(n.left, row + 1, col - 1);
    DFS(n.right, row + 1, col + 1);
  }
  
  DFS(root, 0, 0);
  const result: number[][] = [];

  let sortedColKeys = Object.keys(map).sort((a:string, b:string) => Number(a) - Number(b));
  for (let col of sortedColKeys) {
    let rowObjects = map[col];
    let res: number[] = [];
    let sortedRowKeys = Object.keys(rowObjects).sort((a:string, b:string) => Number(a) - Number(b));

    for (let row of sortedRowKeys) {
      let arr = rowObjects[row].sort((a:number, b:number) => a - b);
      res = [...res, ...arr];
    }

    result.push(res)
  }

  return result;
}



export default () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(9);
  t1.right = new TreeNode(20);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);

  const t2 = new TreeNode(1);
  t2.left = new TreeNode(2);
  t2.right = new TreeNode(3);
  t2.left.left = new TreeNode(4);
  t2.left.right = new TreeNode(6);
  t2.right.left = new TreeNode(5);
  t2.right.right = new TreeNode(7);

  console.log(verticalTraversal(t1))
  console.log(verticalTraversal(t2))
};