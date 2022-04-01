/**
                 v
 1988 1995    ====     
                            v
 1995 2005       ============
                            v
 2000 2005              =====

 2005 2010                  =====
 
prevEnd = 1995

*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const peopleAlive = (years: number[][]): number => {
  years.sort((a, b) => a[0] - b[0]);
  const minHeap = new MinPriorityQueue({compare: (x:number) => x});
  let maxResult = 0;
  let maxYear = 0;

  for (let [start, end] of years) {
    while (minHeap.size() && start > minHeap.front().element) {
      minHeap.dequeue();
    }

    minHeap.enqueue(end);
    if (minHeap.size() > maxResult) {
      maxResult = minHeap.size();
      maxYear = start;
    }
  }

  return maxYear;
}

export default () => {
  console.log(peopleAlive([
    [2000, 2005],
    [1995, 2005],
    [2005, 2010],
    [1988, 1995],
  ]));
};