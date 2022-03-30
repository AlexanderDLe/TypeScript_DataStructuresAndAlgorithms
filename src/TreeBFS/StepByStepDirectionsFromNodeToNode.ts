/**
 * 2096. Step-By-Step Directions Form a Binary Tree Node to Another
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;
const getDirectionsBFS = (root: Node, startValue:number, destValue:number): string => {
  const getStartNodeAndParentsMap = () => {
    const map: any = {};
    let node: Node = null;

    const DFS = (n:Node, parent:Node) => {
      if (!n) return;
      if (n.val === startValue) node = n;
      map[n.val] = parent;
      DFS(n.left, n);
      DFS(n.right, n);
    }

    DFS(root, null);
    return [node, map];
  }

  const [startNode, parentMap] = getStartNodeAndParentsMap();
  const visited = new Set<number>();
  const queue: any[] = [[startNode, '']];
  let count = queue.length;

  while (queue.length) {
    while (count) {
      let [n, directions] = queue.shift();
      if (n.val === destValue) return directions;

      visited.add(n.val);
      let parent = parentMap[n.val];
      if (n.left && !visited.has(n.left.val)) queue.push([n.left, directions + 'L']);
      if (n.right && !visited.has(n.right.val)) queue.push([n.right, directions + 'R']);
      if (parent && !visited.has(parent.val)) queue.push([parent, directions + 'U']);

      count--;
    }
    count = queue.length;
  }

  return '';
}

const getDirections = (root: Node, startValue:number, destValue:number): string => {
  const getLCA = (n:Node):Node => {
    if (!n) return n;
    if (n.val === startValue || n.val === destValue) return n;

    let left = getLCA(n.left);
    let right = getLCA(n.right);

    if (left && right) return n;
    if (!left) return right;
    else return left;
  }

  const getPath = (n:Node, val:number, directions:string):string | null=> {
    if (!n) return null;
    if (n.val === val) return directions;
    let left = getPath(n.left, val, directions + 'L');
    let right = getPath(n.right, val, directions + 'R');
    return left || right;
  }

  const LCA = getLCA(root);
  const pathToStart = getPath(LCA, startValue, '');
  const pathToDest = getPath(LCA, destValue, '');
  const convertedStartPath = 'U'.repeat(pathToStart.length);
  return convertedStartPath + pathToDest;
}

export default () => {
  const t = new TreeNode(5);
  t.left = new TreeNode(1);
  t.right = new TreeNode(2);
  t.left.left = new TreeNode(3);
  t.right.left = new TreeNode(6);
  t.right.right = new TreeNode(4);

  console.log(getDirections(t, 4, 6));
};