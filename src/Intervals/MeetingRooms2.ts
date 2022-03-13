/**
 * 253. Meeting Rooms 2
 * 
 * Return the high amount of overlap at one moment.
 * 
 * Keep track of overlap on every iteration:
 *  1. If continues to overlap, increment overlap count and update overlap range
 *  2. If no overlapping, reset overlap range to curr.
 * 
 * ===============
 *    ====  ===== 
 * =         ===  
*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const meetingRooms2 = (intervals: number[][]): number => {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const currentMeetings = new MinPriorityQueue({priority: (x:number) => x})
  let result = 0;
  
  for (let curr of intervals) {
    let [start, end] = curr;

    // Remove meetings that have ended
    if (currentMeetings.size() && currentMeetings.front().element <= start) {
      currentMeetings.dequeue();
    }

    currentMeetings.enqueue(end);
    result = Math.max(result, currentMeetings.size());
  }

  return result;
}

export default () => {
  let arr1A = [[0,30],[5,10],[15,20], [16, 31]];
  let arr1B = [[7,10],[2,4]];

  console.log(meetingRooms2(arr1A));
  console.log(meetingRooms2(arr1B));
};