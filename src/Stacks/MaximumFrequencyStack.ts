/**
 * 895. Maximum Frequency Stack
 */
import { PriorityQueue } from '@datastructures-js/priority-queue';
import { PrintArray } from '../utils/Utilities';


class FreqStackRef {
  freqMap: any;
  stack: number[][];

  constructor() {
    this.freqMap = new Map();
    this.stack = [];
  }

  push(val: number): void {
    let freq = (this.freqMap.get(val) || 0) + 1;
    this.freqMap.set(val, freq);
    if (!this.stack[freq]) this.stack[freq] = [val];
    else this.stack[freq].push(val);
    console.log(this.stack);
  }

  pop(): number {
    let top = this.stack[this.stack.length - 1];
    let val = top.pop();
    if (!top.length) this.stack.pop();
    this.freqMap.set(val, this.freqMap.get(val) - 1);
    console.log(this.stack);
    return val;
  }
}

class FreqStack {
  freqMap:any;
  stack:number[][];

  constructor() {
    this.freqMap = {};
    this.stack = [];
  }

  push(val: number): void {
    let freq = (this.freqMap[val] || 0) + 1;
    this.freqMap[val] = freq;

    if (!this.stack[freq]) this.stack[freq] = [val];
    else this.stack[freq].push(val);
  }

  pop(): number {
    let topStack = this.stack[this.stack.length - 1];
    let topVal = topStack.pop();
    if (!topStack.length) this.stack.pop();
    this.freqMap[topVal]--;
    return topVal;
  }
}


export default () => {
  const freqStack = new FreqStack();
  freqStack.push(5); // The stack is [5]
  freqStack.push(7); // The stack is [5,7]
  freqStack.push(5); // The stack is [5,7,5]
  freqStack.push(7); // The stack is [5,7,5,7]
  freqStack.push(4); // The stack is [5,7,5,7,4]
  freqStack.push(5); // The stack is [5,7,5,7,4,5]
  console.log(freqStack.pop());   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
  console.log(freqStack.pop());   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
  console.log(freqStack.pop());   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
  console.log(freqStack.pop());   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
};
