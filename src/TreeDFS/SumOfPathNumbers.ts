/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const sumOfPathNumbers = (root: Node): number => {
    let result = 0;
    
    const DFS = (n:Node, str:string): void => {
        if (!n) return;
        str += n.value;
        DFS(n.left, str);
        DFS(n.right, str);

        if (!n.left && !n.right) {
            result += Number(str);
        }
    }

    DFS(root, '');
    return result;
}



export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(7);
    t1.right = new TreeNode(9);
    t1.right.left = new TreeNode(2);
    t1.right.right = new TreeNode(9);
    
    const t2 = new TreeNode(1);
    t2.left = new TreeNode(0);
    t2.right = new TreeNode(1);
    t2.left.right = new TreeNode(1);
    t2.right.left = new TreeNode(6);
    t2.right.right = new TreeNode(5);

    console.log(sumOfPathNumbers(t1))
    console.log(sumOfPathNumbers(t2))
};