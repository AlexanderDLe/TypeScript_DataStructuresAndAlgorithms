/**
 * 543. Diameter of Binary Tree
 * 
 * Context: Each node in tree has parent node pointing to parent node.
 * 
 * To find the successor of a node, you must first find the node.
 * Once you find the node:
 * 
    1.  Node has right child?
        Then Leftmost node of right subtree is successor
    
    2.  Node does not have right child?
        Then parent of parent is successor (if exists)



              
           
              1
          2        3
       4    5   6     7    
 */
import { TreeNode } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;

type BinaryTree = Node;
type BT = BinaryTree | null;
const findSuccessorMyAttempt = (tree: BinaryTree, node: BinaryTree): BT => {
    let nodeFound = false;
    let result: BT = null;
    
    const DFS = (n: BT): void => {
        if (!n || nodeFound) return;

        if (n === node) {
            nodeFound = true;

            // Node has right child 
            // Then Leftmost node of right subtree is successor
            if (n.right) {
                let s = n.right;
                while (s.left) s = s.left;
                result = s;

            // Node does not have right child
            // Then successor node is higher in the tree
            } else {
                // If no parent, then result is null.
                if (!n.parent) return;
                let p = n.parent;

                // If node is left child, then parent is successor
                if (n === p.left) {
                    result = p;
                    return;
                }
                
                // If node is right child
                // 1. If there is no grandparent, return null;
                if (n === p.right) {
                    let gp = p.parent;
                    while (gp) {
                        if (p === gp.left) {
                            result = gp;
                            return;
                        }
                        p = gp;
                        gp = gp.parent;
                    }
                    return;
                }
            }
        }
        
        DFS(n.left);
        DFS(n.right);
    }

    DFS(tree);
    return result;
}

const findSuccessor = (tree: BinaryTree, node: BinaryTree): BT => {
    const getLeftMostChild = (n: BT): BT => {
        while (n.left) n = n.left;
        return n;
    }
    const getRightmostParent = (p: BT): BT => {
        if (!p) return null;
        let gp = p.parent;

        while (gp) {
            if (gp.left === p) return gp;
            p = gp;
            gp = gp.parent;
        }

        return gp;
    }
    
    if (node.right) return getLeftMostChild(node.right);
    return getRightmostParent(node.parent);
}

export default () => {
    const gt = new TreeNode(0);
    const t = new TreeNode(1);
    gt.right = t;
    t.parent = gt;
    

    t.left = new TreeNode(2);
    t.left.parent = t;

    t.right = new TreeNode(3);
    t.right.parent = t;

    t.left.left = new TreeNode(4);
    t.left.left.parent = t.left;
    
    t.left.right = new TreeNode(5);
    t.left.right.parent = t.left;
    
    t.right.left = new TreeNode(6);
    t.right.left.parent = t.right;
    
    t.right.right = new TreeNode(7);
    t.right.right.parent = t.right;


    let target = t.right.right;
    
    let result = findSuccessor(t, target);
    if (result) console.log(result.value);
    else console.log(null)
};
