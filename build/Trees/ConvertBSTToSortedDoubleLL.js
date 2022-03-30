"use strict";
/**
 * 426. Convert Binary Search to Sorted Doubly Linked List
 *
 * We basically create a dummy node as start of the list.
 *
 * We do a post order traversal because a post-order traversal will
 * give us the sorted order of elements in a binary search tree.
 *
 * Within the post order traversal, we link the current list node to the
 * current tree node and vice versa- then iterate the current node forward to the
 * current tree node and continue.
 *
 * At the very end, we
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeClass_1 = require("../DataStructures/TreeClass");
class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
const convertToDoublyList = (root) => {
    if (!root)
        return root;
    const dummy = new Node(0);
    let curr = dummy;
    const DFS = (n) => {
        if (!n)
            return;
        DFS(n.left);
        // In order traversal.
        // Here we have to link into nodes.
        curr.right = n;
        n.left = curr;
        //Mistake: don't forget to traverse the curr node.
        curr = curr.right;
        DFS(n.right);
    };
    DFS(root);
    let head = dummy.right;
    head.left = curr;
    curr.right = head;
    return head;
};
exports.default = () => {
    const t = new TreeClass_1.TreeNode(4);
    t.left = new TreeClass_1.TreeNode(2);
    t.right = new TreeClass_1.TreeNode(5);
    t.left.left = new TreeClass_1.TreeNode(1);
    t.left.right = new TreeClass_1.TreeNode(3);
    (0, TreeClass_1.BinaryPreorderTraversal)(t);
    console.log(convertToDoublyList(t));
};
