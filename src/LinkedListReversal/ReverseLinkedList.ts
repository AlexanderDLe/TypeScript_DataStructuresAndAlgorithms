/**
 * Grokking the Coding Interview
*/

import { ListNode, LinkedList, PrintList } from '../DataStructures/LinkedListClass';
type Node = ListNode<number> | null;

const reverseLinkedList = (head: Node): Node => {
    let p: Node = head;
    let q: Node = null;
    let r: Node = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;

        q.next = r;
    }

    return q;
}


export default () => {
    let list = new LinkedList([2,4,6,8,10])
    list.print();

    PrintList(reverseLinkedList(list.head));
};