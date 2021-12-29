/**
 * 297. Serialize and Deserialize Binary Tree
 */

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
import { PrintArray } from '../utils/Utilities';
type Node = TreeNode<number> | null;


const serialize = (root: Node): string => {
    let string = '[';

    const DFS = (n: Node): void => {
        if (!n) {
            string += 'null,';
            return;
        }
        string += `${n.val},`

        DFS(n.left);
        DFS(n.right);
    }

    DFS(root);
    return `${string}]`;
}

const deserialize = (data: string): Node => {
    let root = null;
    
    data = data.replace(/[\[\]]/g, '')
    let arr = data.split(',')
    arr.pop();

    console.log('\nArray: ')
    PrintArray(arr)

    let index = 0;

    const build = (): Node => {
        if (index === arr.length) return;
        let node: Node = null;

        let curr = arr[index];
        console.log(curr);

        if (arr[index] !== 'null') {
            let val = Number(arr[index]);
            node = new TreeNode(val)
        }
        index++;

        if (node) {
            node.left = build();
            node.right = build();
        }
        return node;
    }
    
    
    return build();
}

export default () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(3);
    t.right.left = new TreeNode(4);
    t.right.right = new TreeNode(5);

    console.log('Tree: ');
    BinaryPreorderTraversal(t);
    
    let serialized = serialize(t);
    console.log('\nSerialized Result: ', serialized);
    
    let deserialized = deserialize(serialized);
    console.log('\nDeserialized Result: ', deserialized);
    BinaryPreorderTraversal(deserialized);
};
