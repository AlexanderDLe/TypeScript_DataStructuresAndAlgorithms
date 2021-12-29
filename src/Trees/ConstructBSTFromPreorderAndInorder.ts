/**
 * 105. Construct Binary Tree From Preorder and Inorder Traversal
 */
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;
type Map = { [key: number]: number };

const buildTreeA = (preorder: number[], inorder: number[]): Node => {
    let map: Map = {};
    for (let i = 0; i < preorder.length; i++) map[preorder[i]] = i;
    
    const findRootIndex = (s: number, e: number): number => {
        let index = Infinity;
        for (let i = s; i <= e; i++) {
            index = Math.min(index, map[inorder[i]]);
        }

        return inorder.indexOf(preorder[index]);
    }

    const build = (start: number, end: number): Node => {
        if (start > end) return null;
        let i = findRootIndex(start, end);
        let n = new TreeNode(inorder[i]);

        n.left = build(start, i - 1);
        n.right = build(i + 1, end);

        return n;
    }

    return build(0, preorder.length - 1);
}

const buildTreeSlicing = (preorder: number[], inorder: number[]): Node => {
    const build = (preorder: number[], inorder: number[]): Node => {
        if (!preorder.length && !inorder.length) return null;

        const t = new TreeNode(preorder[0]);
        const rootIndex = inorder.indexOf(preorder[0]);
        const leftPre = preorder.slice(1, rootIndex + 1);
        const rightPre = preorder.slice(rootIndex + 1, preorder.length);
        const leftIn = inorder.slice(0, rootIndex);
        const rightIn = inorder.slice(rootIndex + 1, inorder.length);

        t.left = build(leftPre, leftIn);
        t.right = build(rightPre, rightIn);

        return t;
    };
    
    return build(preorder, inorder);
};

const buildTreeIndexing = (preorder: number[], inorder: number[]): Node => {
    const map: Map = {};
    for (let i = 0; i < inorder.length; i++) map[inorder[i]] = i;

    const build = (preStart: number, inStart: number, inEnd: number): Node => {
        if (preStart > preorder.length - 1 || inStart > inEnd) return null;

        const t = new TreeNode(preorder[preStart]);
        const rootIndex = map[preorder[preStart]];
        const numsLeft = rootIndex - inStart;
        
        console.log(t.val);
        console.log(`t.left = build(${preStart} + 1, ${inStart}, ${rootIndex} - 1)`);
        console.log(`t.right = build(${preStart} + ${numsLeft} + 1, ${rootIndex} + 1, ${inEnd})\n`);
        t.left = build(preStart + 1, inStart, rootIndex - 1);
        t.right = build(preStart + numsLeft + 1, rootIndex + 1, inEnd);

        return t;
    };
    
    return build(0, 0, inorder.length - 1);
};

const buildTree = (preorder: number[], inorder: number[]): Node => {
    let preorderIndexMap: {[key: number]: number} = {};
    let inorderIndexMap: {[key: number]: number} = {};

    for (let i = 0; i < preorder.length; i++) {
        let currentPreorderNum = preorder[i];
        let currentInorderNum = inorder[i];

        preorderIndexMap[currentPreorderNum] = i;
        inorderIndexMap[currentInorderNum] = i;
    }

    const build = (start: number, end: number): Node => {
        if (start >= end) return null;
        // console.log(`start: ${start}, end: ${end}`)

        let rootIndex = Infinity;
        let rootValue = Infinity;
        for (let i = start; i < end; i++) {
            let currValue = inorder[i];
            let preorderIndexOfCurrValue = preorderIndexMap[currValue]; 

            if (preorderIndexOfCurrValue < rootIndex) {
                rootIndex = preorderIndexOfCurrValue;
                rootValue = currValue;
            }
        }
        
        let inorderIndexOfRoot = inorderIndexMap[rootValue];
        // console.log(`inorderIndexOfRoot: ${inorderIndexOfRoot}, rootIndex: ${rootIndex}, rootValue: ${rootValue}\n`)
        
        let node: Node = new TreeNode(rootValue);
        node.left = build(start, inorderIndexOfRoot);
        node.right = build(inorderIndexOfRoot + 1, end);
        
        return node;
    }

    return build(0, preorder.length);
}

export default () => {
    const preorder = [3,9,20,15,7];
    const inorder =  [9,3,15,20,7];
    // BinaryPreorderTraversal(buildTreeSlicing(preorder, inorder));
    // BinaryPreorderTraversal(buildTreeIndexing(preorder, inorder));
    BinaryPreorderTraversal(buildTree(preorder, inorder));
};
