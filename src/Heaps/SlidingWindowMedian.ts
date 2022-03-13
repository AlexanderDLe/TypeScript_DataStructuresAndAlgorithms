/**
 * 480. Sliding Window Median
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';
class Heap {
  heap:number[];
  fn:any;
  indexMap:any;

  constructor(fn: any) {
    this.heap = [];
    this.fn = fn;
    this.indexMap = {};
  }

  peek() {
    return this.heap[0] || 0;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  add(value:any) {
    const {indexMap, heap} = this;

    heap.push(value);
    const idx = heap.length - 1;
    if (!indexMap[value]) indexMap[value] = new Set([idx]);
    else indexMap[value].add(idx)
    this.heapifyUp(idx);
    console.log('---ADD---');
    console.log(value)
    console.log(indexMap);
    console.log(heap);
  }
  
  remove(value:any) {
    const { indexMap, heap} = this;
    console.log('---REMOVE---');
    console.log('value to remove: ', value);
    console.log('before delete from idxs set', indexMap[value]);
    let idx;
    // Get first index in set - first index occurence
    for (let i of indexMap[value]) {
      idx = i;
      break;
    }
    console.log('index:', idx)
    indexMap[value].delete(idx);
    console.log('after delete from idxs set: ', indexMap[value]);
    // If it's the last item in heap, simply pop from heap.
    if (idx === heap.length - 1) return heap.pop();
    console.log('swap last heap element with element at idx position')
    console.log('prev: ', heap)
    heap[idx] = heap.pop()
    console.log(heap[idx]);
    console.log('after: ', heap)
    console.log(`For the new value at idx ${idx}, update its value in index map`);
    console.log('After popping, the prev last index is now heap.length.')
    console.log(`therefore we delete the previous index position in the map and add its new position ${idx}`)
    console.log(`current value to update: ${heap[idx]} at index ${idx}`)
    console.log(`previous index mapping for value ${heap[idx]}:`, indexMap[heap[idx]])
    indexMap[heap[idx]].delete(heap.length);
    indexMap[heap[idx]].add(idx);
    console.log(`updated index mapping for value ${heap[idx]}:`, indexMap[heap[idx]])
    this.heapifyDown(this.heapifyUp(idx));
  }

  pop():any {
    const value = this.heap[0];
    this.indexMap[value].delete(0);
    if (this.heap.length < 2) return this.heap.pop();
    this.heap[0] = this.heap.pop();
    this.indexMap[this.heap[0]].delete(this.heap.length);
    this.indexMap[this.heap[0]].add(0);
    this.heapifyDown(0);
    return value;
  }

  heapifyDown(parent:number):any {
    const childs = [1,2].map((n) => parent * 2 + n).filter((n) => n < this.heap.length);
    let child = childs[0];
    if (childs[1] && this.fn(this.heap[childs[1]], this.heap[child])) {
      child = childs[1];
    }
    if (child && this.fn(this.heap[child], this.heap[parent])) {
      const childVal = this.heap[child];
      const parentVal = this.heap[parent];
      this.heap[child] = parentVal;
      this.heap[parent] = childVal;
      this.indexMap[childVal].delete(child);
      this.indexMap[childVal].add(parent);
      this.indexMap[parentVal].delete(parent);
      this.indexMap[parentVal].add(child);
      return this.heapifyDown(child);
    }
    return parent;
  }

  heapifyUp(child:any):any {
    const parent:any = Math.floor((child - 1) / 2);
    if (child && this.fn(this.heap[child], this.heap[parent])) {
      const childVal:number = this.heap[child];
      const parentVal:number = this.heap[parent];
      this.heap[child] = parentVal;
      this.heap[parent] = childVal;
      this.indexMap[childVal].delete(child);
      this.indexMap[childVal].add(parent);
      this.indexMap[parentVal].delete(parent);
      this.indexMap[parentVal].add(child);
      return this.heapifyUp(parent);
    }
    return child;
  }
}
class Window {
  minHeap:any;
  maxHeap:any;
  isEven:boolean;

  constructor(k:number) {
    this.minHeap = new Heap((a:number, b:number) => a < b)
    this.maxHeap = new Heap((a:number, b:number) => a > b)
    this.isEven = k % 2 === 0;
  }

  add(num:number) {
    const {minHeap, maxHeap} = this;

    if (minHeap.isEmpty() || num >= minHeap.peek()) {
      minHeap.add(num);
    } else {
      maxHeap.add(num);
    }
    this.balanceHeaps();
  }

  remove(num:number) {
    const {minHeap, maxHeap} = this;

    if (num >= minHeap.peek()) {
      minHeap.remove(num);
    } else {
      maxHeap.remove(num);
    }
    this.balanceHeaps();
  }

  getMedian() {
    const {minHeap, maxHeap} = this;

    if (this.isEven) {
      let minVal = minHeap.peek();
      let maxVal = maxHeap.peek();
      return (minVal + maxVal) / 2;
    }

    return minHeap.peek();
  }

  balanceHeaps() {
    const {minHeap, maxHeap} = this;

    if (minHeap.size() === maxHeap.size() + 2) {
      maxHeap.add(minHeap.pop());
    } else if (minHeap.size() + 1 === maxHeap.size()) {
      minHeap.add(maxHeap.pop());
    }
  }
}
const medianSlidingWindow = (nums:number[], k:number): number[] => {
  const window = new Window(k);
  const result:number[] = []

  let R = 0;
  let L = 0;
  while (R < k - 1) window.add(nums[R++]);
  
  while (R < nums.length) {
    window.add(nums[R++]);
    result.push(window.getMedian());
    window.remove(nums[L++]);
  }

  return result;
}

export default () => {
  console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
  console.log(medianSlidingWindow([1,2,3,4,2,3,1,4,2], 3));
  
  const test = new Heap((a:number,b:number) => a < b);
  test.add(5);
  test.add(5);
  test.add(3);
  test.add(7);
  console.log(test.peek());
  test.remove(5);
};
