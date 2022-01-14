/**
 * Grokking the Coding Interview
*/

import { ListNode, LinkedList, PrintList } from '../DataStructures/LinkedListClass';
type Node = ListNode<number> | null;

const reverseAlternatingKElementSublist = (head: Node, k:number): Node => {
    let dummy: Node = new ListNode(0);
    dummy.next = head;
    let p: Node = dummy;
    let q: Node = null;
    let r: Node = null;
    let prevConnector: Node = dummy;
    let reverseStart: Node = head;

    let reversing = true;
    let i = 0;

    while (p) {
        i++;
        r = q;
        q = p;
        p = p.next;

        if (reversing) q.next = r;

        if ((i > 1 && i % k === 1) || !p) {
            if (reversing) {
                prevConnector.next = q;
                prevConnector = reverseStart;
                reverseStart.next = p;
                reverseStart = p;
            } else {
                prevConnector = q;
                reverseStart = p;
            }
            
            reversing = !reversing;
        }

        if (!p) break;
    }

    return dummy.next;
}


export default () => {
    let list = new LinkedList([1,2,3,4,5,6,7,8])
    let k = 2;
    list.print();

    PrintList(reverseAlternatingKElementSublist(list.head, k));
};