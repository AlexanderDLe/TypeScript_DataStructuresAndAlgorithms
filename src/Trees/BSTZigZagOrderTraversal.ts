/**
 * 102. Binary Tree Level Order Traversal
 */
import { TreeNode } from '../DataStructures/TreeClass';
import { PrintMatrix } from '../utils/Utilities';

type Node = TreeNode<number> | null;

const zigzagLevelOrder = (root: Node): number[][] => {
    if (!root) return [];
    let result: number[][] = [];
    let RS: Node[] = [root];
    let LS: Node[] = [];
    let level = 0;
    let n: Node = null;

    while (RS.length || LS.length) {
        while (RS.length) {
            console.log(RS);
            n = RS.pop();
            
            if (result[level]) result[level].push(n.val);
            else result[level] = [n.val];

            if (n.left) LS.push(n.left);
            if (n.right) LS.push(n.right);
        }
        level++;
        while (LS.length) {
            n = LS.pop();
            if (result[level]) result[level].push(n.val);
            else result[level] = [n.val];

            if (n.right) RS.push(n.right);
            if (n.left) RS.push(n.left);
        }
        level++;
    }

    return result;
}

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.left = new TreeNode(4);
    // t.right.left = new TreeNode(15);
    // t.right.right = new TreeNode(5);

    PrintMatrix(zigzagLevelOrder(t));
};
