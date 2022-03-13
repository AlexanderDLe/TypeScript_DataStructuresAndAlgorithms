/**
 * 630. Course Schedule 3
 */

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

const scheduleCourses = (courses:number[][]): number => {
  courses = courses.sort((a, b) => a[1] - b[1]);
  const heap = new MaxPriorityQueue({priority: (x:any) => x});
  let result = 0;
  let elapsedTime = 0;

  for (let [duration, deadline] of courses) {
    if (elapsedTime + duration <= deadline) {
      elapsedTime += duration;
      heap.enqueue(duration);
      result++;
      continue;
    }
    if (heap.size() && duration < heap.front().element) {
      let longestDuration = heap.dequeue().element;
      elapsedTime -= longestDuration;
      elapsedTime += duration;
      heap.enqueue(duration)
    }
  }

  return result;
}

export default () => {
  console.log(scheduleCourses([[100,200],[200,1300],[1000,1250],[2000,3200]]));
  console.log(scheduleCourses([[1,2]]));
  console.log(scheduleCourses([[3,2],[4,3]]));
  console.log(scheduleCourses([[1,2],[2,3]]));
  console.log(scheduleCourses([[5,15],[3,19],[6,7],[2,10],[5,16],[8,14],[10,11],[2,19]]));
  console.log(scheduleCourses([[5,5],[4,6],[2,6]]));
  console.log(scheduleCourses([[7,16],[2,3],[3,12],[3,14],[10,19],[10,16],[6,8],[6,11],[3,13],[6,16]]));
};
