"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
let Heap = require('collections/heap');
const mergeKSortedListsMap = (lists) => {
    let map = {};
    for (let i = 0; i < lists.length; i++) {
        map[i] = lists[i];
    }
    let dummy = new LinkedListClass_1.ListNode(0);
    let curr = dummy;
    while (Object.keys(map).length) {
        let lowestVal = Infinity;
        let lowestListIndex;
        for (let key in map) {
            if (map[key] && map[key].value < lowestVal) {
                lowestVal = map[key].value;
                lowestListIndex = key;
            }
        }
        curr.next = map[lowestListIndex];
        curr = curr.next;
        map[lowestListIndex] = map[lowestListIndex].next;
        if (!map[lowestListIndex])
            delete map[lowestListIndex];
    }
    return dummy.next;
};
const mergeKSortedLists = (lists) => {
    const minHeapPattern = (a, b) => {
        return b.value - a.value;
    };
    const minHeap = new Heap([], null, minHeapPattern);
    lists.forEach(node => {
        while (node) {
            minHeap.push(node);
            node = node.next;
        }
    });
    let dummy = new LinkedListClass_1.ListNode(0);
    let curr = dummy;
    while (minHeap.length) {
        curr.next = minHeap.pop();
        curr = curr.next;
    }
    return dummy.next;
};
exports.default = () => {
    let listA1 = new LinkedListClass_1.LinkedList([1, 6, 8]);
    let listA2 = new LinkedListClass_1.LinkedList([3, 6, 7]);
    let listA3 = new LinkedListClass_1.LinkedList([1, 3, 4]);
    let listB1 = new LinkedListClass_1.LinkedList([5, 8, 9]);
    let listB2 = new LinkedListClass_1.LinkedList([1, 7]);
    (0, LinkedListClass_1.PrintList)(mergeKSortedLists([listA1.head, listA2.head, listA3.head]));
    (0, LinkedListClass_1.PrintList)(mergeKSortedLists([listB1.head, listB2.head]));
};
