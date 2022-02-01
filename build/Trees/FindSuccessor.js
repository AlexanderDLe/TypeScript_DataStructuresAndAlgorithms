"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const TreeClass_1 = require("../DataStructures/TreeClass");
const findSuccessorMyAttempt = (tree, node) => {
    let nodeFound = false;
    let result = null;
    const DFS = (n) => {
        if (!n || nodeFound)
            return;
        if (n === node) {
            nodeFound = true;
            // Node has right child 
            // Then Leftmost node of right subtree is successor
            if (n.right) {
                let s = n.right;
                while (s.left)
                    s = s.left;
                result = s;
                // Node does not have right child
                // Then successor node is higher in the tree
            }
            else {
                // If no parent, then result is null.
                if (!n.parent)
                    return;
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
    };
    DFS(tree);
    return result;
};
const findSuccessor = (tree, node) => {
    const getLeftMostChild = (n) => {
        while (n.left)
            n = n.left;
        return n;
    };
    const getRightmostParent = (p) => {
        if (!p)
            return null;
        let gp = p.parent;
        while (gp) {
            if (gp.left === p)
                return gp;
            p = gp;
            gp = gp.parent;
        }
        return gp;
    };
    if (node.right)
        return getLeftMostChild(node.right);
    return getRightmostParent(node.parent);
};
exports.default = () => {
    const gt = new TreeClass_1.TreeNode(0);
    const t = new TreeClass_1.TreeNode(1);
    gt.right = t;
    t.parent = gt;
    t.left = new TreeClass_1.TreeNode(2);
    t.left.parent = t;
    t.right = new TreeClass_1.TreeNode(3);
    t.right.parent = t;
    t.left.left = new TreeClass_1.TreeNode(4);
    t.left.left.parent = t.left;
    t.left.right = new TreeClass_1.TreeNode(5);
    t.left.right.parent = t.left;
    t.right.left = new TreeClass_1.TreeNode(6);
    t.right.left.parent = t.right;
    t.right.right = new TreeClass_1.TreeNode(7);
    t.right.right.parent = t.right;
    let target = t.right.right;
    let result = findSuccessor(t, target);
    if (result)
        console.log(result.value);
    else
        console.log(null);
};
