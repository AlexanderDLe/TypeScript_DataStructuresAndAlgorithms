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
const minHeightBST = (array: number[]): Node => {
    const build = (start:number, end:number): Node => {
        if (start > end) return null;
        let mid = Math.floor(start + (end - start) / 2);
        let val = array[mid];

        let node = new BST(val);
        node.left = build(start, mid - 1);
        node.right = build(mid + 1, end);
        
        return node;
    }
    
    return build(0, array.length - 1);
}

export default () => {
    const array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
    console.log(minHeightBST(array));
};
