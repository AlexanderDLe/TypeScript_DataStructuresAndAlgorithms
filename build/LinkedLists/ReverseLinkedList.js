'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 206. Reverse Linked List
 */
var LinkedListClass_1 = require('../DataStructures/LinkedListClass');
var reverseList = function(head) {
    if (!head) return head;
    var p = head;
    var q = null;
    var r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        if (q) q.next = r;
    }
    head = q;
    return head;
};
var ReverseLinkedList = function() {
    var nums = [1, 2, 3, 4, 5];
    var list = new LinkedListClass_1.LinkedList(nums);
    LinkedListClass_1.PrintList(reverseList(list.head));
};
exports.default = ReverseLinkedList;
