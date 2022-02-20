"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }
    buildHeap(array) {
        // Write your code here.
        return array;
    }
    siftDown() {
        // Write your code here.
    }
    siftUp() {
        // Write your code here.
    }
    peek() {
        // Write your code here.
        return -1;
    }
    remove() {
        // Write your code here.
        return -1;
    }
    insert(value) {
        // Write your code here.
    }
    getLeftChildIndex(index) {
        return (index * 2) + 1;
    }
    getRightChildIndex(index) {
        return (index * 2) + 2;
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
}
exports.default = () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const k = 4;
};
