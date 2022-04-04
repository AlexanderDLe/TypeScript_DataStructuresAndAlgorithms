"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoublyLinkedNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.nodeMap = {};
        this.size = 0;
        this.head = new DoublyLinkedNode(0, 0);
        this.tail = null;
    }
    get(key) {
        if (!this.nodeMap[key])
            return -1;
        let node = this.nodeMap[key];
        this.remove(node);
        this.insert(node);
        return node.val;
    }
    put(key, value) {
        if (key in this.nodeMap) {
            this.replaceNode(this.nodeMap[key], value);
            return;
        }
        let n = new DoublyLinkedNode(key, value);
        // Mistake: assign n to map AFTER insertion
        // to avoid deleting key before inserting.
        // console.log('before:', this.nodeMap)
        this.insert(n);
        this.nodeMap[key] = n;
        // console.log('after:', this.nodeMap)
        // console.log('-------------');
    }
    insert(n) {
        if (this.size === 0) {
            this.handleInsertEmpty(n);
            return;
        }
        if (this.size < this.capacity) {
            this.handleInsertPartial(n);
            return;
        }
        if (this.size === this.capacity) {
            this.handleInsertFull(n);
            return;
        }
    }
    // Replacing a node requires a different pathway
    // Than regular insertion
    replaceNode(n, value) {
        n.val = value;
        this.remove(n);
        this.handleInsertPartial(n);
    }
    handleInsertEmpty(n) {
        this.size++;
        this.head.next = n;
        n.prev = this.head;
        this.tail = n;
    }
    handleInsertPartial(n) {
        this.size++;
        this.tail.next = n;
        n.prev = this.tail;
        this.tail = n;
    }
    handleInsertFull(n) {
        delete this.nodeMap[this.head.next.key];
        this.remove(this.head.next);
        this.handleInsertPartial(n);
    }
    remove(n) {
        this.size--;
        let prev = n.prev;
        let next = n.next;
        prev.next = n.next;
        if (next)
            next.prev = n.prev;
        // Mistake: don't forget to clean up this node,
        // as we may use it to detach to end of list.
        n.next = null;
        n.prev = null;
        if (this.tail === n) {
            if (next)
                this.tail = next;
            else
                this.tail = prev;
        }
    }
    print() {
        let str = '';
        let node = this.head.next;
        while (node) {
            str += (`(${node.key}-${node.val})->`);
            node = node.next;
        }
        console.log(str); //
    }
}
class LRUCacheMapMethod {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key))
            return -1;
        const val = this.cache.get(key);
        this.cache.delete[key];
        this.cache.set(key, val);
        return this.cache.get(key);
    }
    put(key, val) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, val);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}
exports.default = () => {
    const lRUCache2 = new LRUCache(5);
    console.log(lRUCache2.get(2));
    lRUCache2.put(2, 6);
    lRUCache2.put(1, 5);
    lRUCache2.print();
    lRUCache2.put(1, 2);
    lRUCache2.print();
    console.log(lRUCache2.get(2));
    lRUCache2.print();
    console.log(lRUCache2.get(1));
    lRUCache2.print();
    lRUCache2.put(3, 3);
    lRUCache2.print();
    lRUCache2.put(4, 4);
    lRUCache2.print();
    console.log(lRUCache2.get(1));
    console.log(lRUCache2.get(2));
    lRUCache2.print();
    lRUCache2.put(5, 5);
    lRUCache2.print();
};
