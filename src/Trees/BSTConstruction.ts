/**
 * 102. Binary Tree Level Order Traversal
 */
import { BinaryPreorderTraversal, TreeNode } from '../DataStructures/TreeClass';
import { PrintMatrix } from '../utils/Utilities';
import BSTZigZagOrderTraversal from './BSTZigZagOrderTraversal';

type Node = TreeNode<number> | null;

export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value: number): BST {
        let n: BST = this;
        let node = new BST(value);

        while (n) {
            if (node.value < n.value) {
                if (n.left) n = n.left;
                else {
                    n.left = node;
                    break;
                }
            }
            else {
                if (n.right) n = n.right
                else {
                    n.right = node;
                    break;
                }
            }
        }

        return this;
    }
  
    contains(value: number) {
        let n: BST = this;

        while (n) {
            if (value === n.value) return true;
            if (value < n.value) n = n.left;
            if (value > n.value) n = n.right
        }
        
        return false;
    }
  
    remove(value: number, p: BST | null): BST {
        let n: BST = this;
        p = p ? p : null;
        
        while (n) {
            if (value < n.value) {
                p = n;
                n = n.left;
            } else if (value > n.value) {
                p = n;
                n = n.right;
            } else {
                if (n.left && n.right) {
                    n.value = n.right.getMinValue();
                    n.right.remove(n.value, n);
                } else if (p.left === n) {
                    p.left = n.left ? n.left : n.right;
                } else if (p.right === n) {
                    p.right = n.left ? n.left : n.right;
                } else if (!p) {
                    if (n.left) {
                        n.value = n.left.value;
                        n.right = n.left.right;
                        n.left = n.left.left;
                    } else if (n.right) {
                        n.value = n.right.value;
                        n.left = n.right.left;
                        n.right = n.right.right;
                    } else {
                        break;
                    }
                }
            }
        }
        
        return this;
    }

    getMinValue(): number {
        let n: BST = this;

        while (n.left) {
            n = n.left;
        }
        return n.value;
    }
  }

export default () => {
    const t = new TreeNode(10);
    t.left = new TreeNode(5);
    t.right = new TreeNode(15);
    t.left.left = new TreeNode(2);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(13);
    t.right.right = new TreeNode(22);
    t.left.left.left = new TreeNode(1);
    t.right.left.right = new TreeNode(14);

    const tree = new BST(1);
};
