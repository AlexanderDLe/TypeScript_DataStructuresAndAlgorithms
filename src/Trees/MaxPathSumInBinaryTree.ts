/**
 * AlgoExpert
 */

export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

type Node = BinaryTree | null;
const maxPathSumInBinaryTree = (tree:BinaryTree): number => {
    let maxSum = -Infinity;

    const DFS = (n: Node): number => {
        if (!n) return 0;
        let val = n.value;
        let left = DFS(n.left);
        let right = DFS(n.right);

        maxSum = Math.max(maxSum, left + val);
        maxSum = Math.max(maxSum, right + val);
        maxSum = Math.max(maxSum, left + right + val);

        return left > right ? left + val : right + val;
    }
    DFS(tree);
    return maxSum;
}

export default () => {
    let n0 = new BinaryTree(0);
    let n1 = new BinaryTree(1);
    let n2 = new BinaryTree(2);
    let n3 = new BinaryTree(3);
    let n4 = new BinaryTree(4);
    let n5 = new BinaryTree(5);
    let n6 = new BinaryTree(6);
    let n7 = new BinaryTree(7);
    let n8 = new BinaryTree(8);
    let n9 = new BinaryTree(9);

    // n1.left = n2;
    // n1.right = n3;
    // n2.left = n4;
    // n2.right = n5;
    // n3.left = n6;
    // n3.right = n7;
    
    let nn1 = new BinaryTree(-1);
    n1.left = n2;
    n1.right = nn1;

    console.log(maxPathSumInBinaryTree(n1));
};
