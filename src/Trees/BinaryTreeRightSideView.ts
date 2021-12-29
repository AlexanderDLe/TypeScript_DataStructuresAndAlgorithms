/**
 * 199. Binary Tree Right Side View
 */

import { prependListener } from 'process';
import { TreeNode } from '../DataStructures/TreeClass';
import { PrintArray } from '../utils/Utilities';

type Node = TreeNode<number> | null;

const rightSideViewQueue = (root: Node): number[] => {
    if (!root) return [];

    let levels: number[][] = [];
    let queue: Node[] = [root];
    let count = 1;
    
    while (queue.length) {
        let level = [];

        while (count) {
            let n = queue.shift();
            level.push(n.val);

            if (n.right) queue.push(n.right);
            if (n.left) queue.push(n.left);
            
            count--;
        }
        
        levels.push(level);
        count = queue.length;
    }
    
    return levels.map(level => {
        return level[0];
    });
};

const rightSideViewDFS = (root: Node): number[] => {
    const DFS = (node: Node, h: number): void => {
        if (!node) return;

        res[h] = node.val;
        DFS(node.left, h + 1);
        DFS(node.right, h + 1);
    }

    if (!root) return [];

    let res: number[] = [];

    DFS(root, 0);
    return res;

}

const rightSideView = (root: Node): number[] => {
    const DFS = (n: Node, height: number): void => {
        if (!n) return;

        result[height] = n.val;
        DFS(n.left, height + 1);
        DFS(n.right, height + 1);
    }

    let result: number[] = [];

    DFS(root, 0);
    return result;
}

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.left.right = new TreeNode(5);

    t.right = new TreeNode(3);
    t.right.right = new TreeNode(4);
    PrintArray(rightSideView(t));
};
