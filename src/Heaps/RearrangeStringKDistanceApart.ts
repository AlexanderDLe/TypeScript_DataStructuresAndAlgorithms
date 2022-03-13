/**
 * 973. K Closest Points To Origin
*/
import { MaxPriorityQueue, MinPriorityQueue } from "@datastructures-js/priority-queue";

type Item = {char:string, frequency: number}
const rearrangeString = (s:string, k:number): string => {
  const map: any = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  
  const heap = new MaxPriorityQueue({priority: (x:Item) => x.frequency})
  for (let key in map) {
    const item:Item = {char: key, frequency: map[key]};
    heap.enqueue(item);
  }

  const queue: any[] = [];
  let result = ''
  let index = 0;

  while (heap.size()) {
    let item = heap.dequeue().element;
    result += item.char;
    item.frequency--;
    
    if (item.frequency > 0) {
      queue.push([index + k, item]);
    }
    // Made a mistake here: Incremented index too early - affectd the queue[0] index value
    index++;
    
    if (queue.length) {
      let indexToRemove = queue[0][0];
      // Made two errors here: forgot to shift before enqueuing
      // Also forgot to access the actual item for enqueueing into the heap
      if (index >= indexToRemove) heap.enqueue(queue.shift()[1]);
    }
  }
  
  return result.length === s.length ? result : '';
};

export default () => {
  console.log(rearrangeString("aabbcc", 3))
  console.log(rearrangeString("aaabc", 3))
  console.log(rearrangeString("aaadbbcc", 2))
};
