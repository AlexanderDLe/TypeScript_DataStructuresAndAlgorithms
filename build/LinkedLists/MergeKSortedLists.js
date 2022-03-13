"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 23. Merge K Sorted Lists
 *
 */
const priority_queue_1 = require("@datastructures-js/priority-queue");
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const mergeLists = (lists) => {
    if (!lists.length)
        return null;
    let heap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x.val });
    for (let head of lists)
        if (head)
            heap.enqueue(head);
    let dummy = new LinkedListClass_1.ListNode(0);
    let curr = dummy;
    while (heap.size()) {
        let n = heap.dequeue().element;
        curr.next = n;
        curr = curr.next;
        n = n.next;
        if (n)
            heap.enqueue(n);
    }
    return dummy.next;
};
exports.default = () => {
    let list1 = new LinkedListClass_1.LinkedList([1, 4, 5]);
    let list2 = new LinkedListClass_1.LinkedList([1, 3, 4]);
    let list3 = new LinkedListClass_1.LinkedList([2, 6]);
    (0, LinkedListClass_1.PrintList)(mergeLists([list1.head, list2.head, list3.head]));
    (0, LinkedListClass_1.PrintList)(mergeLists([null]));
};
