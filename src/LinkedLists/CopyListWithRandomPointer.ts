/**
 *  138. Copy List With Random Pointer
 */

import { RandomListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = RandomListNode<number> | null;

const copyRandomList = (head: Node): Node => {
    let dummy = new RandomListNode(0);
    let newHead = dummy;
    let n = head;
    let oldArr: Node[] = [];
    let newArr: Node[] = [];

    while (n) {
        dummy.next = new RandomListNode(n.val);
        dummy = dummy.next;
        newArr.push(dummy);
        oldArr.push(n);
        n = n.next;
    }

    for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i].random === null) newArr[i].random = null;
        else {
            let index = oldArr.indexOf(oldArr[i].random);
            newArr[i].random = newArr[index];
        }
    }

    return newHead.next;
};

export default () => {
    const n1 = new RandomListNode(7);
    const n2 = new RandomListNode(13);
    const n3 = new RandomListNode(11);
    const n4 = new RandomListNode(10);
    const n5 = new RandomListNode(1);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = null;

    n1.random = null;
    n2.random = n1;
    n3.random = n5;
    n4.random = n3;
    n5.random = n1;

    console.log(copyRandomList(n1));
};
