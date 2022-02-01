/**
 *  AlgoExpert
 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const sumOfLinkedLists = (linkedListOne: Node, linkedListTwo: Node): Node => {
    if (!linkedListOne) return linkedListTwo;
    if (!linkedListTwo) return linkedListOne;

    let L1: Node = linkedListOne;
    let L2: Node = linkedListTwo;
    let dummy = new ListNode(0);
    let n = dummy;
    
    let carry = 0;
    while (L1 || L2) {
        let L1val = L1 ? L1.value : 0;
        let L2val = L2 ? L2.value : 0;

        let sum = L1val + L2val + carry;
        let newNode = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        
        n.next = newNode;
        n = n.next;
        
        if (L1) L1 = L1.next;
        if (L2) L2 = L2.next;
    }

    if (carry) n.next = new ListNode(1);
    return dummy.next;
}

export default () => {
    const nums1 = [2, 4, 7, 1];
    const nums2 = [9, 4, 5];
    const list1 = new LinkedList(nums1);
    const list2 = new LinkedList(nums2);
    
    PrintList(sumOfLinkedLists(list1.head, list2.head));
};
