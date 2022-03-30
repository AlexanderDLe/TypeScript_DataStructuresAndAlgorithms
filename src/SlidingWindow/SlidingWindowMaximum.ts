/**
 * 239. Sliding Window Maximum
 * 
 * [1  3  -1  -3  -5  3  6  7]
 * | |
 * 
 * Queue = [1]
 * 
 ***************************** 
 * 
 * [1  3  -1  -3  -5  3  6  7]
 * |    |
 * 
 * Queue = [3]
 * 
 ***************************** 
 * 
 * [1  3  -1  -3  -5  3  6  7]
 * |        |
 * 
 * Queue = [3, -1]
 * 
 ***************************** 
 * 
 * [1  3  -1  -3  -5  3  6  7]
 *    |         |
 * 
 * Queue = [3, -1, -3]
 * 
 ***************************** 
 * 
 * [1  3  -1  -3  -5  3  6  7]
 *        |         |
 * 
 * Queue = [-1, -3, -5]
 * 
 ***************************** 
 * 
 * [1  3  -1  -3  -5   3   6   7]
 *            |         |
 * 
 * Queue = [3]
 * 
*/

import { PrintArray } from "../utils/Utilities";

const maxSlidingWindowRef = (nums: number[], k: number): number[] => {
  if (!nums.length || k <= 0) return [];

  const result: number[] = [];
  const Q: number[] = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (Q.length && nums[Q[Q.length - 1]] <= nums[i]) {
      Q.pop();
    }
    Q.push(i);

    if (Q[0] === i - k) {
      Q.shift();
    }

    if (i >= k - 1) {
      result.push(nums[Q[0]]);
    }
    PrintArray(Q);
  }

  return result;
}

const maxSlidingWindowA = (nums: number[], k: number): number[] => {
  if (nums.length === 0 || k <= 0) return [];

  const result: number[] = [];
  const Q: number[] = []

  for (let i = 0; i < nums.length; i++) {
    while (Q.length && nums[Q[Q.length - 1]] < nums[i]) {
      Q.pop();
    }
    Q.push(i);

    let windowStart = i - k;
    if (Q[0] === windowStart) Q.shift();

    // Window size is k but we need to subtract 1 for zero index
    if (i >= k - 1) result.push(nums[Q[0]]);
  }

  return result;
}

const maxSlidingWindow = (nums: number[], k: number): number[] => {
  const lastQElement = (Q: number[]) => nums[Q[Q.length - 1]];
  
  const Q: number[] = [];
  const result:number[] = [];

  let i = 0;
  while (i < nums.length) {
    while (Q.length && lastQElement(Q) < nums[i]) {
      Q.pop();
    }
    Q.push(i);

    if (Q[0] === i - k) Q.shift();
    if (i >= k - 1) result.push(nums[Q[0]]);
    i++;
  }

  return result;
}

export default () => {
  console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
};
