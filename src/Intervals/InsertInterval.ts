/**
 * Grokking the Coding Interview
 * 
 * 57. Insert Interval
*/

import { PrintArray } from "../utils/Utilities";

const insertIntervalsWhack = (intervals: number[][], new_interval: number[]): number[][] => {
  let result: number[][] = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let carry: number[] = [];

  const checkOverlap = (iA: number[], iB: number[]): boolean => {
    if (iA[0] >= iB[0] && iA[0] <= iB[1]) return true;
    if (iB[0] >= iA[0] && iB[0] <= iA[1]) return true;
    return false;
  }

  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i];
    
    if (!carry.length) {
      let isOverlapping = checkOverlap(curr, new_interval);
      if (isOverlapping) {
        carry[0] = Math.min(curr[0], new_interval[0]);
        carry[1] = Math.max(curr[1], new_interval[1]);
      } else {
        result.push(curr);
      }
    } else {
      let isOverlapping = checkOverlap(carry, curr);
      if (isOverlapping) {
        carry[0] = Math.min(curr[0], carry[0]);
        carry[1] = Math.max(curr[1], carry[1]);
      } else {
        result.push(carry);
        carry = [];
      }
    }
  }

  if (!carry.length) result.push(intervals[intervals.length - 1])
  else result.push(carry)

  return result;
}

const insertIntervalsGrokking = (intervals: number[][], new_interval: number[]): number[][] => {
  let result: number[][] = [];
  let i = 0;

  // Skip & add all intervals that come before new interval
  while (i < intervals.length && intervals[i][1] < new_interval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge all overlapping intervals
  let carry: number[] = [];
  while (i < intervals.length && intervals[i][0] <= new_interval[1]) {
    if (!carry.length) carry = new_interval;
    carry[0] = Math.min(carry[0], intervals[i][0]);
    carry[1] = Math.max(carry[1], intervals[i][1]);
    i++;
  }
  result.push(carry);

  // Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++
  }

  return result;
}

const insertIntervals = (intervals: number[][], new_interval: number[]): number[][] => {
  const result: number[][] = [];
  let i = 0;

  const isOverlapping = (prev:number[], curr:number[]):boolean => {
    if (curr[0] > prev[1] || prev[0] > curr[1]) return false;
    return true;
  }
  
  while (i < intervals.length && intervals[i][1] < new_interval[0]) {
    result.push(intervals[i]);
    i++;
  }

  let prev = new_interval;
  while (i < intervals.length) {
    let curr = intervals[i];
    if (!isOverlapping(prev, curr)) break;
    prev[0] = Math.min(prev[0], curr[0]);
    prev[1] = Math.max(prev[1], curr[1]);
    i++;
  }

  result.push(prev);
  while (i < intervals.length) {
    let curr = intervals[i];
    result.push(curr);
    i++;
  }

  return result;
}

export default () => {
  let intervals1 = [[1,3], [5,7], [8,12]], newInterval1 = [4,6];
  let intervals2 = [[1,3], [5,7], [8,12]], newInterval2 = [4,10];
  let intervals3 = [[2,3],[5,7]], newInterval3 = [1,4];
  let intervals4 = [[1,5]], newInterval4 = [0,0];
  let intervals5 = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval5 = [4,8];
  let intervals6 = [[1,3],[6,9]], newInterval6 = [2,5];
  let intervals7 = [[1,5]], newInterval7 = [5,7];

  console.log(insertIntervals(intervals1, newInterval1));
  console.log(insertIntervals(intervals2, newInterval2));
  console.log(insertIntervals(intervals3, newInterval3));
  console.log(insertIntervals(intervals4, newInterval4));
  console.log(insertIntervals(intervals5, newInterval5));
  console.log(insertIntervals(intervals6, newInterval6));
  console.log(insertIntervals(intervals7, newInterval7));
};