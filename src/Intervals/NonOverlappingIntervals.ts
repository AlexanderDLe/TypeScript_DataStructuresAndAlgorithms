/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray, PrintMatrix } from "../utils/Utilities";
const eraseOverlapIntervals = (intervals: number[][]): number => {
  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  })
  
  let count = 0;
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];

    // Check overlap
    if (curr[0] < prev[1]) {
      // Since overlapping, compare end points. 
      // Set prev to interval with smaller end point.
      if (curr[1] < prev[1]) prev = curr;
      count++;
    } else {
      // If no overlapping, simply move forward.
      prev = curr;
    }
  }

  return count;
}

export default () => {
  let Intervals1 = [[1,2],[2,3],[3,4],[1,3]];
  let Intervals2 = [[1,2],[1,2],[1,2]];
  let Intervals3 = [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],
                    [58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]];
  // console.log(eraseOverlapIntervals(Intervals1));
  // console.log(eraseOverlapIntervals(Intervals2));
  console.log(eraseOverlapIntervals(Intervals3));
};