/**
 * 206. Reverse Linked List
 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

const reverseList = (
    head: ListNode<number> | null
): ListNode<number> | null => {
    if (!head) return head;

    let p: ListNode<number> | null = head;
    let q: ListNode<number> | null = null;
    let r: ListNode<number> | null = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;
        if (q) q.next = r;
    }

    head = q;
    return head;
};

export default () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedList(nums);
    PrintList(reverseList(list.head));
};
