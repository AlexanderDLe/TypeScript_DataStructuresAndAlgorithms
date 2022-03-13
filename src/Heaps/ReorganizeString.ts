/**
 * 767. Reorganize String
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

type KeyVal = {key:string, val:number}
const reorganizeString = (s: string): string => {
  const map: any = {};
  const heap = new MaxPriorityQueue({priority: (x:KeyVal) => x.val})
  const queue: KeyVal[] = [];

  for (let char of s) map[char] = (map[char] || 0) + 1;
  for (let key in map) heap.enqueue({key, val: map[key]});

  let result = '';
  
  while (heap.size()) {
    let curr = heap.dequeue().element;
    result += curr.key;
    curr.val--;
    
    if (queue.length) heap.enqueue(queue.shift());
    if (curr.val) queue.push(curr);
  }

  if (queue.length) return '';
  return result;
}

export default () => {
  console.log(reorganizeString('aab'));
  console.log(reorganizeString('aaba'));
  console.log(reorganizeString('aababac'));
};
