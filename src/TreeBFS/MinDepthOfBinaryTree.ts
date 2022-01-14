/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const minDepthOfBinaryTree = (root: Node): number => {
    let queue: Node[] = [];

    queue.push(root);
    let count = queue.length;
    let level = count;

    while (queue.length) {
        while (count) {
            let n = queue.shift();
            
            if (!n.left || !n.right) return level;
            queue.push(n.left);
            queue.push(n.right);
            count--;
        }
        level++;
        count = queue.length;
    }
    return level;
}

export default () => {
    
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    t.left.right = new TreeNode(5);
    t.right.left = new TreeNode(6);
    t.right.right = new TreeNode(7);

    console.log(minDepthOfBinaryTree(t))
};