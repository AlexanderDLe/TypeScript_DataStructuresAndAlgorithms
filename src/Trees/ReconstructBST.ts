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
const reconstructBST = (preOrderTraversalValues: number[]): Node => {
    let array = preOrderTraversalValues;
    
    const buildTree = (start:number, end:number): Node => {
        let node = new BST(array[start]);
        let p = start + 1;

        while (array[p] < array[start]) p++;
        if (array[start + 1] < array[start]) node.left = buildTree(start + 1, p - 1);
        if (array[p] >= array[start]) node.right = buildTree(p, end);

        return node;
    }

    return buildTree(0, array.length);
}

export default () => {
    let array = [10, 4, 2, 1, 5, 17, 19, 18];
    console.log(reconstructBST(array));
};
