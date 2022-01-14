/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const connectAllLevelOrderSiblings = (root: Node): Node => {
    let queue: Node[] = [];

    queue.push(root);
    let count = queue.length;
    let prev: Node = null;

    while (queue.length) {
        while (count) {
            let n = queue.shift();
            if (prev) prev.next = n;
            prev = n;

            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);
            count--;
        }
        count = queue.length;
    }
    
    return root;
}

export default () => {
    
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(3);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(5);
    t1.right.left = new TreeNode(6);
    t1.right.right = new TreeNode(7);
    
    const t2 = new TreeNode(12);
    t2.left = new TreeNode(7);
    t2.right = new TreeNode(1);
    t2.left.right = new TreeNode(9);
    t2.right.left = new TreeNode(10);
    t2.right.right = new TreeNode(5);

    console.log(connectAllLevelOrderSiblings(t1))
    console.log(connectAllLevelOrderSiblings(t2))
};