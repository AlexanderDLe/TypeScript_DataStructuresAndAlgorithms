"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = exports.MaxHeap = exports.MinHeap = void 0;
class MinHeap {
    constructor(max) {
        this.max = max;
        this.list = [];
    }
    add(val) {
        if (this.list.length >= this.max) {
            if (val > this.list[0]) {
                this.remove();
                this.list.push(val);
                this.bubbleUp();
            }
        }
        else {
            this.list.push(val);
            this.bubbleUp();
        }
        console.log(this.list);
    }
    remove() {
        if (this.list.length == 1) {
            this.list.pop();
            return;
        }
        let last = this.list.pop();
        this.list[0] = last;
        this.bubbleDown();
    }
    peak() {
        if (this.list.length > 0) {
            return this.list[0];
        }
    }
    bubbleUp() {
        let index = this.list.length - 1;
        let parent = Math.floor((index - 1) / 2);
        while (parent >= 0 && this.list[parent] > this.list[index]) {
            let temp = this.list[parent];
            this.list[parent] = this.list[index];
            this.list[index] = temp;
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    bubbleDown() {
        let curr = 0;
        let left, right;
        while (true) {
            left = 2 * curr + 1;
            right = 2 * curr + 2;
            if (left > this.list.length - 1) {
                break;
            }
            if (Math.min(this.list[left], this.list[right] || Number.MAX_SAFE_INTEGER) > this.list[curr]) {
                break;
            }
            let temp;
            if (this.list[right] !== undefined &&
                this.list[right] < this.list[left]) {
                temp = this.list[right];
                this.list[right] = this.list[curr];
                this.list[curr] = temp;
                curr = right;
            }
            else {
                temp = this.list[left];
                this.list[left] = this.list[curr];
                this.list[curr] = temp;
                curr = left;
            }
        }
    }
}
exports.MinHeap = MinHeap;
class MaxHeap {
    constructor(max) {
        this.max = max;
        this.list = [];
    }
    add(val) {
        if (this.list.length >= this.max) {
            if (val > this.list[0]) {
                this.remove();
                this.list.push(val);
                this.bubbleUp();
            }
        }
        else {
            this.list.push(val);
            this.bubbleUp();
        }
        console.log(this.list);
    }
    remove() {
        if (this.list.length == 1) {
            this.list.pop();
            return;
        }
        let last = this.list.pop();
        this.list[0] = last;
        this.bubbleDown();
    }
    peak() {
        if (this.list.length > 0) {
            return this.list[0];
        }
    }
    bubbleUp() {
        let index = this.list.length - 1;
        let parent = Math.floor((index - 1) / 2);
        while (parent >= 0 && this.list[parent] > this.list[index]) {
            let temp = this.list[parent];
            this.list[parent] = this.list[index];
            this.list[index] = temp;
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    bubbleDown() {
        let curr = 0;
        let left, right;
        while (true) {
            left = 2 * curr + 1;
            right = 2 * curr + 2;
            if (left > this.list.length - 1) {
                break;
            }
            if (Math.min(this.list[left], this.list[right] || Number.MAX_SAFE_INTEGER) > this.list[curr]) {
                break;
            }
            let temp;
            if (this.list[right] !== undefined &&
                this.list[right] < this.list[left]) {
                temp = this.list[right];
                this.list[right] = this.list[curr];
                this.list[curr] = temp;
                curr = right;
            }
            else {
                temp = this.list[left];
                this.list[left] = this.list[curr];
                this.list[curr] = temp;
                curr = left;
            }
        }
    }
}
exports.MaxHeap = MaxHeap;
class Heap {
    constructor(comparator = (a, b) => a - b) {
        this.array = [];
        this.comparator = (i1, i2) => {
            const value = comparator(this.array[i1], this.array[i2]);
            if (Number.isNaN(value)) {
                throw new Error(`Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`);
            }
            return value;
        };
    }
    /**
     * Insert element
     * @runtime O(log n)
     * @param {any} value
     */
    add(value) {
        this.array.push(value);
        this.bubbleUp();
    }
    /**
     * Retrieves, but does not remove, the head of this heap
     * @runtime O(1)
     */
    peek() {
        return this.array[0];
    }
    /**
     * Retrieves and removes the head of this heap, or returns null if this heap is empty.
     * @runtime O(log n)
     */
    remove(index = 0) {
        if (!this.size)
            return null;
        this.swap(index, this.size - 1); // swap with last
        const value = this.array.pop(); // remove element
        this.bubbleDown(index);
        return value;
    }
    /**
     * Returns the number of elements in this collection.
     * @runtime O(1)
     */
    get size() {
        return this.array.length;
    }
    /**
     * Move new element upwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    bubbleUp() {
        let index = this.size - 1;
        const parent = (i) => Math.ceil(i / 2 - 1);
        while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
            this.swap(parent(index), index);
            index = parent(index);
        }
    }
    /**
     * After removal, moves element downwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    bubbleDown(index = 0) {
        let curr = index;
        const left = (i) => 2 * i + 1;
        const right = (i) => 2 * i + 2;
        const getTopChild = (i) => (right(i) < this.size
            && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i));
        while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
            const next = getTopChild(curr);
            this.swap(curr, next);
            curr = next;
        }
    }
    /**
     * Swap elements on the heap
     * @runtime O(1)
     * @param {number} i1 index 1
     * @param {number} i2 index 2
     */
    swap(i1, i2) {
        [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
    }
}
exports.Heap = Heap;
