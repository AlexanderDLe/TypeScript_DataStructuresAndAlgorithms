/**
 * 337. House Robber 3
 * DP Approach:
 * On each node, you must essentially ask the question:
 * Which is greater? root val + grandchildren vals OR children vals?
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';

type Node = TreeNode<number> | null;

const robA = (root: Node): number => {
    if (!root) return 0;

    let Lchild = rob(root.left);
    let Rchild = rob(root.right);

    let val = 0;

    if (root.left) {
        val += rob(root.left.left);
        val += rob(root.left.right);
    }
    if (root.right) {
        val += rob(root.right.left);
        val += rob(root.right.right);
    }

    return Math.max(rob(root.left) + rob(root.right), root.val + val);
}

const robDP = (root: Node): number => {    
    const robSub = (n: Node): number[] => {
        if (!n) return [0, 0];
        
        let left = robSub(n.left);
        let right = robSub(n.right);
        let res: number[] = [0, 0];
        
        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        res[1] = n.val + left[0] + right[0];
        console.log(res)
        return res;
    }
    
    let result: number[] = robSub(root);
    return Math.max(result[0], result[1]);
};

const rob2 = (root: Node): number => {    
    const robSub = (n: Node): any => {
        if (!n) return {withRoot: 0, withoutRoot: 0};
        
        let left = robSub(n.left);
        let right = robSub(n.right);
        let res: any = {withRoot: 0, withoutRoot: 0};
        
        res.withoutRoot = Math.max(left.withoutRoot, left.withRoot) 
                        + Math.max(right.withoutRoot, right.withRoot);

        res.withRoot = n.val + left.withoutRoot + right.withoutRoot;

        console.log(n.val, left, right)
        console.log(n.val, res, '\n')
        return res;
    }
    
    let result: any = robSub(root);
    return Math.max(result.withoutRoot, result.withRoot);
};


const rob = (root: Node): number => {
    const DFS = (n: Node): any => {
        if (!n) return { withRoot: 0, withoutRoot: 0};
        let left = DFS(n.left);
        let right = DFS(n.right);

        let obj: any = {withRoot: 0, withoutRoot: 0};

        obj.withRoot = n.val + left.withoutRoot + right.withoutRoot;
        obj.withoutRoot = Math.max(left.withRoot, left.withoutRoot) 
                        + Math.max(right.withRoot, right.withoutRoot);

        return obj;
    }

    let res = DFS(root);
    return Math.max(res.withRoot, res.withoutRoot);
}

export default () => {
    const t = new TreeNode(3);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.left.right = new TreeNode(3);
    t.right.right = new TreeNode(1);
    console.log(rob(t));
    BinaryPreorderTraversal(t);
};
