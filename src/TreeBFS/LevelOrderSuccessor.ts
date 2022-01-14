/**
 * Grokking the Coding Interview
 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';;

type Node = TreeNode<number> | null;

const levelOrderSuccessor = (root: Node, key: number): number => {
    let queue: Node[] = [];

    queue.push(root);
    let count = queue.length;
    let keyFound = false;
    
    while (queue.length) {
        while (count) {
            let n = queue.shift();
            if (n.value === key) keyFound = true;
            else if (keyFound) return n.value;

            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);

            count--;
        }
        count = queue.length;
    }

    return 0;
}

export default () => {
    
    const t1 = new TreeNode(1);
    t1.left = new TreeNode(2);
    t1.right = new TreeNode(3);
    t1.left.left = new TreeNode(4);
    t1.left.right = new TreeNode(5);
    
    const t2 = new TreeNode(12);
    t2.left = new TreeNode(7);
    t2.right = new TreeNode(1);
    t2.left.right = new TreeNode(9);
    t2.right.left = new TreeNode(10);
    t2.right.right = new TreeNode(5);

    console.log(levelOrderSuccessor(t1, 3))
    console.log(levelOrderSuccessor(t2, 9))
    console.log(levelOrderSuccessor(t2, 12))
};