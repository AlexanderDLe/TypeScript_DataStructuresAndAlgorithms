/**
 *  19. Remove Nth Node From End Of List
 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const removeNthFromEnd = (head: Node, n: number): Node => {
    if (!head) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let p = dummy;
    let q = dummy;

    while (n) {
        p = p.next;
        n--;
    }
    while (p && p.next) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;

    return dummy.next;
};

export default () => {
    const nums = [1, 2, 3, 4, 5];
    const list = new LinkedList(nums);
    const target = 2;
    PrintList(list.head);
    PrintList(removeNthFromEnd(list.head, target));
};
