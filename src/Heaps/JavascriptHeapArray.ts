/**
 * 215. Kth Largest Element in an Array
 */

import { PrintArray } from '../utils/Utilities';

type HeapArray = (number | null)[];
type ChildNode = number | undefined;

class MaxHeapArray {
    arr: HeapArray = [null];

    constructor(newArr: number[]) {
        this.arr.push(...newArr);
        this.heapify();
    }

    push(value: number): void {
        this.arr.push(value);
        this.bubbleUp();
    }

    pop(): number {
        let result = this.arr[1];

        this.swap(1, this.arr.length - 1);
        this.arr.pop();

        this.sinkDown(1);

        return result;
    }

    private bubbleUp(): void {
        let i = this.arr.length - 1;

        while (i > 1) {
            let parentIndex = Math.floor(i / 2);
            let parent = this.getParentNode(parentIndex);
            let curr = this.arr[i];

            if (curr > parent) {
                this.swap(i, parentIndex);
                i = parentIndex;
            } else break;
        }
    }

    private sinkDown(index?: number): void {
        let i = index ? index : 1;
        let children: [ChildNode, ChildNode] = this.getChildrenNodes(i);

        while (children[0]) {
            let curr = this.arr[i];
            let left = children[0];
            let right = children[1];

            if (left && right && curr < left && curr < right) {
                if (right <= left) {
                    this.swap(i, i * 2);
                    i = i * 2;
                } else {
                    this.swap(i, i * 2 + 1);
                    i = i * 2 + 1;
                }
            } else if (left && curr <= left) {
                this.swap(i, i * 2);
                i = i * 2;
            } else if (right && curr < right) {
                this.swap(i, i * 2 + 1);
                i = i * 2 + 1;
            }
            children = this.getChildrenNodes(i);
        }
    }

    private heapify(): void {
        for (let i = this.arr.length - 1; i > 0; i--) {
            let [leftChild, rightChild] = this.getChildrenNodes(i);
            if (leftChild && this.arr[i] < leftChild) this.sinkDown(i);
            else if (rightChild && this.arr[i] < rightChild) this.sinkDown(i);
        }
    }

    private getParentNode(index: number): number {
        return this.arr[index];
    }

    private getChildrenNodes(index: number): [ChildNode, ChildNode] {
        let leftChild = this.arr[index * 2];
        let rightChild = this.arr[index * 2 + 1];
        return [leftChild, rightChild];
    }

    private swap(i1: number, i2: number): void {
        [this.arr[i1], this.arr[i2]] = [this.arr[i2], this.arr[i1]];
    }
}

class MinHeapArray {
    arr: HeapArray = [null];

    constructor(newArr: number[]) {
        this.arr.push(...newArr);
        this.heapify();
    }

    push(value: number): void {
        this.arr.push(value);
        this.bubbleUp();
    }

    pop(): number {
        let result = this.arr[1];

        this.swap(1, this.arr.length - 1);
        this.arr.pop();

        this.sinkDown(1);

        return result;
    }

    private bubbleUp(): void {
        let i = this.arr.length - 1;

        while (i > 1) {
            let parentIndex = Math.floor(i / 2);
            let parent = this.getParentNode(parentIndex);
            let curr = this.arr[i];

            if (curr < parent) {
                this.swap(i, parentIndex);
                i = parentIndex;
            } else break;
        }
    }

    private sinkDown(index?: number): void {
        let i = index ? index : 1;
        let children: [ChildNode, ChildNode] = this.getChildrenNodes(i);

        while (children[0]) {
            let curr = this.arr[i];
            let left = children[0];
            let right = children[1];

            if (left && right && curr > left && curr > right) {
                if (right >= left) {
                    this.swap(i, i * 2);
                    i = i * 2;
                } else {
                    this.swap(i, i * 2 + 1);
                    i = i * 2 + 1;
                }
            } else if (left && curr >= left) {
                this.swap(i, i * 2);
                i = i * 2;
            } else if (right && curr > right) {
                this.swap(i, i * 2 + 1);
                i = i * 2 + 1;
            }
            children = this.getChildrenNodes(i);
        }
    }

    private heapify(): void {
        for (let i = this.arr.length - 1; i > 0; i--) {
            let [leftChild, rightChild] = this.getChildrenNodes(i);
            if (leftChild && this.arr[i] > leftChild) this.sinkDown(i);
            else if (rightChild && this.arr[i] > rightChild) this.sinkDown(i);
        }
    }

    private getParentNode(index: number): number {
        return this.arr[index];
    }

    private getChildrenNodes(index: number): [ChildNode, ChildNode] {
        let leftChild = this.arr[index * 2];
        let rightChild = this.arr[index * 2 + 1];
        return [leftChild, rightChild];
    }

    private swap(i1: number, i2: number): void {
        [this.arr[i1], this.arr[i2]] = [this.arr[i2], this.arr[i1]];
    }
}

export default () => {
    const nums = [10, 20, 15, 12, 40, 25, 18];
    let heap = new MinHeapArray(nums);
    heap.push(50);
    heap.push(1);

    PrintArray(heap.arr);
};
