/**
 * 973. K Closest Points To Origin
*/
import { MaxPriorityQueue, MinPriorityQueue } from "@datastructures-js/priority-queue";

type KeyVal = {Key:string, Val: number}

const topK = (nums:number[], k:number): number[] => {
  let map: any = {};
  for (let num of nums) map[num] = (map[num] || 0) + 1;

  let minHeap = new MinPriorityQueue({priority: (x:KeyVal) => x.Val})
  for (let key in map) {
    if (minHeap.size() < k) {
      minHeap.enqueue({Key: key, Val: map[key]})
      continue;
    }
    if (map[key] > minHeap.front().element.Val) {
      minHeap.dequeue();
      minHeap.enqueue({Key: key, Val: map[key]})
    }
  }

  const result: number[] = minHeap.toArray().map(x => Number(x.element.Key));
  return result;
};

export default () => {
  console.log(topK([1,1,1,2,2,3], 2))
  console.log(topK([1], 1))
};
