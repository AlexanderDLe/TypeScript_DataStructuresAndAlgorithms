/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const pathWithGivenSequence = (root: Node, sequence:number[]): boolean => {
    let result = false;

    const DFS = (n:Node, i:number):void => {
        if (!n) return;
        if (n.value !== sequence[i]) return;
        DFS(n.left, i + 1);
        DFS(n.right, i + 1);

        if (!n.left && !n.right && i === sequence.length - 1) {
            result = true;
        }
    }

    DFS(root, 0);
    return result;
}

export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(7);
    t1.right = new TreeNode(9);
    t1.right.left = new TreeNode(2);
    t1.right.right = new TreeNode(9);
    const sequence1 = [1, 9, 9]
    
    const t2 = new TreeNode(1);
    t2.left = new TreeNode(0);
    t2.right = new TreeNode(1);
    t2.left.right = new TreeNode(1);
    t2.right.left = new TreeNode(6);
    t2.right.right = new TreeNode(5);
    const sequence2 = [1, 0, 7]
    const sequence3 = [1, 1, 6]

    console.log(pathWithGivenSequence(t1, sequence1))
    console.log(pathWithGivenSequence(t2, sequence2))
    console.log(pathWithGivenSequence(t2, sequence3))
};