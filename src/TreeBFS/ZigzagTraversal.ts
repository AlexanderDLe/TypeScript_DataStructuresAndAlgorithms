/**
 * Grokking the Coding Interview
 * 
 *            1
 *           /  \
 *          2    3
 *       /  |    |  \
 *      4   5    6   7
 *   /  |   |    |   |  \
 *  8   9   10  11   12  13
 *
 * 
 ********************************************************************** 
 * 
 * Easiest way: Do regular level order traversal then switch between
 * push and unshift on every level subarray.
 * 
 ********************************************************************** 
 * 
 * HARD WAY BELOW
 * 
 *          <--                     leftToRight = true
 *  queue = [1]                     Pop then unshift left child then right
 * 
 ********************************************************************* 
 * 
 *          --->                    
 * queue = [3, 2]                   Shift then push right child then left
 * 
 ********************************************************************* 
 * 
 *          <--------               
 * queue = [7, 6, 5, 4]             Pop then unshift left to right.
 * 
 ********************************************************************* 
 * 
 *          -------------------->   
 * queue = [8, 9, 10, 11, 12, 13]   
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const binaryTreeLevelOrderTraversalReversed = (root: Node): number[][] => {
    let result: number[][] = [];
    let queue: Node[] = [];

    queue.push(root);
    let count = queue.length;
    let leftToRight = true;

    while (queue.length) {
        let level: number[] = [];

        while (count) {
            let n: Node = queue.shift();
            
            if (leftToRight) level.push(n.value);
            else level.unshift(n.value);
            
            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);
            count--;
        }
        count = queue.length;
        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
}

const binaryTreeLevelOrderTraversalReversedHardAndDUMB = (root: Node): number[][] => {
    let result: number[][] = [];
    let queue: Node[] = [];

    queue.push(root);
    let count = queue.length;
    let leftToRight = true;

    while (queue.length) {
        let level: number[] = [];

        while (count) {
            let n: Node = leftToRight ? queue.pop() : queue.shift();

            level.push(n.value);

            if (leftToRight) {
                if (n.left) queue.unshift(n.left);
                if (n.right) queue.unshift(n.right);
            } else {
                if (n.right) queue.push(n.right);
                if (n.left) queue.push(n.left);
            }
            count--;
        }
        count = queue.length;
        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
}


export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(7);

    console.log(binaryTreeLevelOrderTraversalReversed(t))
};