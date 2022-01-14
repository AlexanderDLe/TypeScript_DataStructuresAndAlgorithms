/**
 * Grokking the Coding Interview
 * 
 * Each node's longest diameter is the sum of its longest(left +  right) chains + itself.
 * After, it will return the greater of its left or right chain to its parent + itself.
 * 
 * As it DFS's through the tree, the DFS function will track the greatest diameter.
*/

import { TreeNode } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const diameterOfBinaryTree = (root: Node): number => {
    let diameter = 0;

    const DFS = (n:Node):number => {
        if (!n) return 0;

        let left = DFS(n.left);
        let right = DFS(n.right);

        diameter = Math.max(diameter, left + right + 1);
        return Math.max(left + 1, right + 1);
    }
    DFS(root);
    return diameter;
}


export default () => {
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(3);
    t1.left.right = new TreeNode(4);
    t1.right.left = new TreeNode(5);
    t1.right.right = new TreeNode(6);
    
    const t2 = new TreeNode(1);
    t2.left = new TreeNode(2);
    t2.right = new TreeNode(3);
    t2.right.left = new TreeNode(5);
    t2.right.right = new TreeNode(6);
    t2.right.left.left = new TreeNode(7);
    t2.right.left.right = new TreeNode(8);
    t2.right.right.left = new TreeNode(9);
    t2.right.left.right.right = new TreeNode(10);
    t2.right.right.left.left = new TreeNode(11);
    
    console.log(diameterOfBinaryTree(t1))
    console.log(diameterOfBinaryTree(t2))
};