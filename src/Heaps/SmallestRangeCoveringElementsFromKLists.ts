/**
 * 973. K Closest Points To Origin
*/
import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const smallestRangeHeapRef = (nums:number[][]): number[] => {
  const heap = new MinPriorityQueue({priority: (x:any) => x[0]})
  const answer = [-Infinity, Infinity];
  let max = -Infinity;

  for (let group = 0; group < nums.length; group++) {
    let minOfGroup = nums[group][0];
    heap.enqueue([minOfGroup, group, 0]);
    max = Math.max(minOfGroup, max);
  }
  while (heap.size() === nums.length) {
    const [min, group, index] = heap.dequeue().element;
    
    if (max - min < answer[1] - answer[0]) {
      answer[0] = min;
      answer[1] = max;
    }
    
    let nextVal = nums[group][index + 1];
    if (nextVal === undefined) break;
    heap.enqueue([nextVal, group, index + 1]);
    max = Math.max(nextVal, max);
  }

  return answer;
};

const smallestRange = (nums:number[][]): number[] => {
  const heap = new MinPriorityQueue({priority: (x:any) => x[0]});
  const answer = [-Infinity, Infinity];
  let max = -Infinity;

  for (let group = 0; group < nums.length; group++) {
    let minValueOfGroup = nums[group][0];
    heap.enqueue([minValueOfGroup, group, 0]);
    max = Math.max(max, minValueOfGroup);
  }
  while (nums.length === heap.size()) {
    const [min, group, index] = heap.dequeue().element;

    if (max - min < answer[1] - answer[0]) {
      answer[0] = min;
      answer[1] = max;
    }

    let nextValue = nums[group][index + 1];
    if (nextValue === undefined) break;

    heap.enqueue([nextValue, group, index + 1]);
    max = Math.max(max, nextValue);
  }

  return answer;
}

export default () => {
  console.log(smallestRange([
    [4,10,15,24,26],
    [0,9,12,20],
    [5,18,22,30]
  ]))
};
