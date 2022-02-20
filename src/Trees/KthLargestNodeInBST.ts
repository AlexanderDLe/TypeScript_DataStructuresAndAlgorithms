/**
 * AlgoExpert
 */

export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
type Node = BST | null;
const kthLargestNodeInBST = (tree: BST, k:number): number => {
    let result = 0;

    const DFS = (n: Node): void => {
        if (!n || !k) return;
        DFS(n.right);
        k--;
        if (!k) result = n.value;
        DFS(n.left);
    }

    DFS(tree);
    return result;
}

export default () => {
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
