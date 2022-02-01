/**
 * 328. Odd Even Linked List
 */
export class Node {
    value: number;
    prev: Node | null;
    next: Node | null;
  
    constructor(value: number) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
}
export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node: Node) {
        if (node === this.head) return;

        if (this.existsInList(node)) {
            this.remove(node);
        }

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = node;
        }
        
        if (!this.tail) {
            let n = this.head;

            while (n && n.next) {
                n = n.next;
            }
            this.tail = n;
        }
    }
  
    setTail(node: Node) {
        if (node === this.tail) return;

        if (this.existsInList(node)) {
            this.remove(node);
        }

        if (!this.tail) {
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            node.next = null;
            this.tail = node;
        }

        if (!this.head) {
            let n = this.head;

            while (n && n.next) {
                n = n.next;
            }
            this.tail = n;
        }
    }
  
    insertBefore(node: Node, nodeToInsert: Node) {
        if (this.existsInList(nodeToInsert)) {
            this.remove(nodeToInsert);
        }

        if (node === this.head) {
            this.setHead(nodeToInsert);
            return;
        }
        let prev = node.prev;

        prev.next = nodeToInsert;
        nodeToInsert.prev = prev;

        nodeToInsert.next = node;
        node.prev = nodeToInsert;
    }
  
    insertAfter(node: Node, nodeToInsert: Node) {
        if (this.existsInList(nodeToInsert)) {
            this.remove(nodeToInsert);
        }

        if (node === this.tail) {
            this.setTail(nodeToInsert);
            return;
        }
        let next = node.next;

        node.next = nodeToInsert;
        nodeToInsert.prev = node;

        nodeToInsert.next = next;
        next.prev = nodeToInsert;
    }
  
    insertAtPosition(position: number, nodeToInsert: Node) {
        if (this.existsInList(nodeToInsert)) {
            this.remove(nodeToInsert);
        }
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }

        let node = this.head;
        let pos = 1;

        while (node && node.next && pos < position) {
            pos++;
            node = node.next;
        }

        // If pos < position, that means we've reached the end of the list
        // and but the position is beyond the end point. We must add to end.
        if (pos < position) {
            this.setTail(nodeToInsert)
            return;
        }
        // Else, pos === position, and therefore we have to replace the current node (n)
        // with the nodeToInsert. The replaced node will be the next node of nodeToInsert
        let prev = node.prev;

        prev.next = nodeToInsert;
        nodeToInsert.prev = prev;

        nodeToInsert.next = node;
        node.prev = nodeToInsert;
    }
  
    removeNodesWithValue(value: number) {
        let n: Node | null = this.head;

        let nodesToRemove: Node[] = [];

        while (n) {
            if (n.value === value) {
                nodesToRemove.push(n);
            }
            n = n.next;
        }
        
        for (let node of nodesToRemove) {
            this.remove(node);
        }
    }

    remove(node: Node ) {
        let prev = node.prev;
        let next = node.next;
        
        if (prev) prev.next = next;
        if (next) next.prev = prev;
        
        if (!next) this.tail = prev;
        if (!prev) this.head = next;
    }
  
    containsNodeWithValue(value: number) {
        let n: Node | null = this.head;

        while (n && n.next) {
            if (n.value === value) return true;
            n = n.next;
        }

        return false;
    }

    existsInList(node: Node | null) {
        let n: Node | null = this.head;

        while (n) {
            if (n === node) return true;
            n = n.next;
        }

        return false;
    }

    printFromHead() {
        let n: Node | null = this.head;
        let str = 'Head: ';

        while (n) {
            str += n.value;
            n = n.next;

            if (n) str += (' -> ');
        }

        console.log(str);
    }
    printFromTail() {
        let n = this.tail;
        let str = 'Tail: ';

        while (n) {
            str += n.value;
            n = n.prev;

            if (n) str += (' -> ');
        }

        console.log(str);
    }
}

export default () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    
    n2.prev = n1;
    n3.prev = n2;
    n4.prev = n3;
    n5.prev = n4;
    
    const n6 = new Node(6);
    const n3A = new Node(3);
    const n3B = new Node(3);

    let DLL = new DoublyLinkedList();
    DLL.setHead(n1);
    DLL.setHead(n3);
    DLL.setTail(n3);
    DLL.setHead(n6);
    DLL.setHead(n3A);
    DLL.removeNodesWithValue(3);
    DLL.insertBefore(n6, n2);
    DLL.insertAfter(n4, n1);
    DLL.insertAtPosition(2, n4);

    DLL.printFromHead();
    DLL.printFromTail();
};
