/**
 * Grokking the Coding Interview
*/

import { ListNode, LinkedList, PrintList } from '../DataStructures/LinkedListClass';
import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

type Node = ListNode<number> | null;

const mergeKSortedListsMap = (lists: Node[]): Node => {
    let map: {[key: number]: Node} = {};
    
    for (let i = 0; i < lists.length; i++) {
        map[i] =  lists[i];
    }

    let dummy: Node = new ListNode(0);
    let curr = dummy;
    
    while (Object.keys(map).length) {
        let lowestVal = Infinity;
        let lowestListIndex: any;

        for (let key in map) {
            if (map[key] && map[key].value < lowestVal) {
                lowestVal = map[key].value;
                lowestListIndex = key;
            }
        }
        curr.next = map[lowestListIndex];
        curr = curr.next;

        map[lowestListIndex] = map[lowestListIndex].next;
        if (!map[lowestListIndex]) delete map[lowestListIndex];
    }

    return dummy.next;
}

const mergeKSortedListsHeap = (lists: Node[]): Node => {
    const minHeapPattern = (a:any, b:any) => {
        return b.value - a.value;
    }

    const minHeap = new Heap([], null, minHeapPattern);

    lists.forEach(node => {
        while (node) {
            minHeap.push(node);
            node = node.next;
        }
    })

    let dummy = new ListNode(0);
    let curr = dummy;
    while (minHeap.length) {
        curr.next = minHeap.pop();
        curr = curr.next;
    }


    return dummy.next;
}

export default () => {
    let listA1 = new LinkedList([1, 6, 8])
    let listA2 = new LinkedList([3, 6, 7])
    let listA3 = new LinkedList([1, 3, 4])

    let listB1 = new LinkedList([5, 8, 9])
    let listB2 = new LinkedList([1, 7])
    
    PrintList(mergeKSortedListsHeap([listA1.head, listA2.head, listA3.head]));
    PrintList(mergeKSortedListsHeap([listB1.head, listB2.head]));
};
