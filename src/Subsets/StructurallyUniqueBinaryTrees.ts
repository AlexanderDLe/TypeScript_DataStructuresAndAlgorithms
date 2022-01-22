/**
 * Grokking the Coding Interview
 * 
 * n(1): 1
 * 
 * o
 * 
 * 1
 *
 ********************************************* 
 * n(2): 2
 *  
 *     o        o
 *   /            \
 * n(1)           n(1)
 * 
 * 1      +      1           = 2
 * 
 ********************************************* 
 * n(3): 5
 *  
 *     o        o               o
 *   /            \           /   \
 * n(2)           n(2)      n(1)  n(1)
 * 
 * (2 * 1)  +   (2 * 1)   +   (1 * 1)        = 5
 * 
 ********************************************* 
 * n(4): 12
 *  
 *     o      o             o            o     
 *   /          \         /   \        /   \   
 * n(3)         n(3)    n(2)  n(1)   n(1)  n(2)
 * 
 * (5 * 1) + (5 * 1)  +  (2 * 1)    + (2 * 1) = 14
 * 
 * 
 ********************************************* 
 * n(5): 
 *  
 *     o     o           o           o            o     
 *   /         \       /   \       /   \        /   \   
 * n(4)        n(4)  n(2)  n(2)  n(1)  n(3)   n(3)  n(1)
 * 
 * (14 * 1)+(14 * 1) + (2 * 2)   + (1 * 5) + (5 * 1) = 42
 * 
 ********************************************* 
 * 
 * [n]
 * 
 * [n1, 1n]
 * 
 * [n2, 1n1, 2n]
 * 
 ********************************************* 
 * n = 3
 * 
 * recurse(0, 3)        <--- Outer loop
 * 
 ********************************************* 
 * Outer Loop
 * Start = 0 | end = 3
 * 
 * Loop from start to end:
 * 
 * for (let i = start; i < end; i++); ie:* 
 * for (let i = 0; i < 3; i++)
 * 
 * The index (i) of each outer loop iteration will be the
 * root node of a tree. It's left and right subtrees will be
 * determined by the same recursive function but from the index
 * to the left and right of the root index.
 * 
 * leftSubtree = recurse(start, i - 1);
 * rightSubtree = recurse(i + 1, end);
 * 
 * when i = 0;
 * leftSubtree = recurse(0, -1);
 * rightSubtree = recurse(1, 3);
 * 
 ********************************************* 
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
import ReverseSublist from '../LinkedListReversal/ReverseSublist';
type Node = TreeNode<number> | null;

import { PrintArray } from "../utils/Utilities";

const structurallyUniqueBTRef = (n: number): Node[] => {
    if (n <= 0) return [];

    const recurse = (start:number, end:number): Node[] => {
        let result: Node[] = [];
        
        // Base condition: Return null for empty sub-tree
        // Consider n = 1, in this case we will have start = end = 1, this means
        // we should only have one tree.
        // We will have two recursive calls, recurse(1, 0) & recurse(2, 1)
        // Both of these should return null for the left and right child.
        if (start > end) return [null];

        for (let rootIndex = start; rootIndex < end + 1; rootIndex++) {
            //Making 'i' the root of the tree
            let leftSubtrees = recurse(start, rootIndex - 1);
            let rightSubtrees = recurse(rootIndex + 1, end);

            for (let L = 0; L < leftSubtrees.length; L++) {
                for (let R = 0; R < rightSubtrees.length; R++) {
                    const root = new TreeNode(rootIndex);
                    root.left = leftSubtrees[L] || null;
                    root.right = rightSubtrees[R] || null;
                    result.push(root);
                }
            }
        }
        return result;
    }

    return recurse(1, n);
}

const structurallyUniqueBT = (n: number): Node[] => {
    if (n <= 0) return [];
    
    const recurse = (start: number, end: number): Node[] => {
        /*  Base Case: Start and end define the start and end indexes for determining
            the trees and subtrees. For example, indexes from 1->2 is valid
            while 2->1 is not. Invalids should return a null value to indicate there
            is no valid subtree. */
        if (start > end) return [null];
        let result: Node[] = [];

        for (let rootIndex = start; rootIndex < end + 1; rootIndex++) {
            // The parameters are defined logically; we the all variations of
            // subtrees on the left and all variations of subtrees on the right.
            let leftSubtrees = recurse(start, rootIndex - 1);
            let rightSubtrees = recurse(rootIndex + 1, end);

            // Loop through all variations of the left subtree.
            // Loop through all variations of the right subtree.
            for (let L = 0; L < leftSubtrees.length; L++) {
                for (let R = 0; R < rightSubtrees.length; R++) {
                    /* At this point, we are looping through all variations of
                     the left and right subtrees.

                    We simply use the rootIndex as the root node while
                    we build all variations of the tree via nodes from the
                    left and right subtrees.*/
                    let root = new TreeNode(rootIndex);
                    root.left = leftSubtrees[L] || null;
                    root.right = rightSubtrees[R] || null;
                    result.push(root);
                }
            }
        }
        return result;
    }

    // We want all variations of trees from 0 to n.
    return recurse(1, n);
}

export default () => {
    console.log(structurallyUniqueBT(2));
    console.log(structurallyUniqueBT(3));
};

