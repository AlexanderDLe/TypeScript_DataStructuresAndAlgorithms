"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  237. Delete Node In Linked List
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListClass_2 = require("../DataStructures/LinkedListClass");
const deleteNode = (node) => {
    node.val = node.next.val;
    node.next = node.next.next;
};
exports.default = () => {
    const nums1 = [4, 5, 1, 9];
    const l1 = new LinkedListClass_1.LinkedList(nums1);
    (0, LinkedListClass_2.PrintList)(l1.head);
    const node = l1.head.next;
    deleteNode(node);
    (0, LinkedListClass_2.PrintList)(l1.head);
};
