/**
 *  19. Remove Nth Node From End Of List
 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const removeNthFromEndA = (head: Node, n: number): Node => {
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

const removeNthFromEnd = (head: Node, n: number): Node => {
    let dummy: Node = new ListNode(0);
    dummy.next = head;

    let p: Node = null;
    let s: Node = dummy;
    let f: Node = dummy;

    while (n) {
        f = f.next;
        n--;
    }

    while (f) {
        p = s;
        s = s.next;
        f = f.next;
    }
    
    p.next = s.next;
    
    return dummy.next;
}

export default () => {
    const nums = [1];
    const list = new LinkedList(nums);
    const target = 1;
    PrintList(list.head);
    PrintList(removeNthFromEnd(list.head, target));
};
