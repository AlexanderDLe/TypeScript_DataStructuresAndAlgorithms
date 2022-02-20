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

const validateThreeNodesRecursion = (nodeOne:BST, nodeTwo:BST, nodeThree:BST): boolean => {
    const isDescendant = (node: Node, target: Node): boolean => {
        if (!node) return false;
        if (node === target) return true;
        return node.value > target.value ? isDescendant(node.left, target) : isDescendant(node.right, target);
    }
    if (isDescendant(nodeOne, nodeTwo)) return isDescendant(nodeTwo, nodeThree);
    if (isDescendant(nodeThree, nodeTwo)) return isDescendant(nodeTwo, nodeOne);

    return false;
}

const validateThreeNodesLoop = (nodeOne:BST, nodeTwo:BST, nodeThree:BST): boolean => {
    const isDescendant = (node: Node, target: BST): boolean => {
        while (node) {
            if (target === node) return true;
            if (target.value < node?.value) node = node.left;
            else node = node.right;
        }
        return false;
    }
    if (isDescendant(nodeOne, nodeTwo)) return isDescendant(nodeTwo, nodeThree);
    if (isDescendant(nodeThree, nodeTwo)) return isDescendant(nodeTwo, nodeOne);

    return false;
}

const validateThreeNodes = (nodeOne:BST, nodeTwo:BST, nodeThree:BST): boolean => {
    const isDescendant = (n: Node, target: BST): boolean => {
        if (!n) return false;
        if (n === target) return true;
        if (n.value < target.value) return isDescendant(n.right, target);
        if (n.value > target.value) return isDescendant(n.left, target);
        return true;
    }

    if (isDescendant(nodeOne, nodeTwo)) return isDescendant(nodeTwo, nodeThree);
    if (isDescendant(nodeThree, nodeTwo)) return isDescendant(nodeTwo, nodeOne);
    return false;
}

export default () => {
    let n5 = new BST(5);
    let n2 = new BST(2);
    let n7 = new BST(7);
    let n1 = new BST(1);
    let n4 = new BST(4);
    let n6 = new BST(6);
    let n8 = new BST(8);
    let n0 = new BST(0);
    let n3 = new BST(3);

    // n5.left = n2;
    // n5.right = n7;
    // n2.left = n1;
    // n2.right = n4;
    // n7.left = n6;
    // n7.right = n8;
    // n1.left = n0;
    // n4.left = n3;

    n2.left = n1;
    n2.right = n3;
    n3.right = n4;

    console.log(validateThreeNodes(n1, n2, n3));
};
