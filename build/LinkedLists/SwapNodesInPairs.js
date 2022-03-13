"use strict";
/**
 * 24. Swap Nodes In Pairs
  
           p
           3 > 4

     p
l1 > 1 > 3
 
     q
l2 > 2
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const swapPairsA = (head) => {
    let l1Head = new LinkedListClass_1.ListNode(0);
    let l2Head = new LinkedListClass_1.ListNode(0);
    let l1 = l1Head;
    let l2 = l2Head;
    let p = head;
    while (p) {
        l1.next = p;
        l1 = l1.next;
        p = p.next;
        if (!p)
            break;
        l2.next = p;
        l2 = l2.next;
        p = p.next;
    }
    l1.next = null;
    l2.next = null;
    let dummy = new LinkedListClass_1.ListNode(0);
    l1 = l1Head.next;
    l2 = l2Head.next;
    p = dummy;
    while (l1 || l2) {
        if (l2) {
            p.next = l2;
            l2 = l2.next;
            p = p.next;
        }
        if (l1) {
            p.next = l1;
            l1 = l1.next;
            p = p.next;
        }
    }
    return dummy.next;
};
const swapPairs = (head) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let prev = dummy;
    while (head && head.next) {
        let n1 = head;
        let n2 = head.next;
        prev.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        prev = n1;
        head = n1.next;
    }
    return dummy.next;
};
exports.default = () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedListClass_1.LinkedList(nums);
    (0, LinkedListClass_1.PrintList)(swapPairs(list.head));
};
