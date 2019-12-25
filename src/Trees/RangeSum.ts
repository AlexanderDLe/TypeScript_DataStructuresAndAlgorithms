import { TreeNode } from './TreeClass';

const Solution = (root: TreeNode<number>, L: number, R: number): number => {
    let result = 0;

    const traversalSum = (n: TreeNode<number> | null): void => {
        if (!n) return;
        if (n.val >= L && n.val <= R) {
            result += n.val;
        }
        traversalSum(n.left);
        traversalSum(n.right);
    };

    traversalSum(root);
    return result;
};

const RangeSum = () => {
    const t = new TreeNode(10);
    t.left = new TreeNode(5);
    t.right = new TreeNode(15);
    t.left.left = new TreeNode(3);
    t.left.right = new TreeNode(7);
    t.right.right = new TreeNode(18);

    const L = 7;
    const R = 15;
    console.log(Solution(t, L, R));
};

export default RangeSum;
