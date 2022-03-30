/**
 *  138. Copy List With Random Pointer
 * 
 * 
 * original:        7 > 13 > 11 > 10 > 1 > null
 * Omap: {0:7, 1:13, 2:11, 3:10, 4:1}
 * 
 * 
 * copy:     dum > 7> 13 > 11 > 10 > 1
 * 
 * Iterate over copy with
 * 0 -> node copy of 7
 * 
 * Get original node
 * 0:7 -> orig node of 7
 * 
 * 7 has random index pointer to some node.
 * we can use that to point the corresponding copied node.
 * 
 * 0:7 - random -> null.
 * copy(7) - set to -> null.
 */

import { RandomListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = RandomListNode<number> | null;

const copyRandomListRef = (head: Node): Node => {
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

const copyRandomList = (head: Node): Node => {
  const oldArr: Node[] = []
  const newArr: Node[] = []
  const dummy = new RandomListNode(0);
  let p = dummy;
  let n = head;

  while (n) {
    p.next = new RandomListNode(n.val);
    newArr.push(p.next);
    oldArr.push(n);

    p = p.next;
    n = n.next;
  }

  for (let i = 0; i < newArr.length; i++) {
    let newNode = newArr[i];
    let oldNode = oldArr[i];

    if (oldNode.random === null) continue;
    let randomIndex = oldArr.indexOf(oldNode.random);
    newNode.random = newArr[randomIndex];
  }

  return dummy.next;
}

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
