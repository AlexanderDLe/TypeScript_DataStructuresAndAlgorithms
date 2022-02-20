/**
 * AlgoExpert
 */


class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
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

  insert(value: number) {
    // Write your code here.
  }

  getLeftChildIndex(index:number) {
    return (index * 2) + 1;
  }
  getRightChildIndex(index:number) {
    return (index * 2) + 2;
  }
  getParentIndex(index:number) {
    return Math.floor((index - 1) / 2);
  }
  
}

export default () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const k = 4;
};
