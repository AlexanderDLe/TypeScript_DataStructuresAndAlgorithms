/**
 * 2104. Sum of Subarray Ranges




  1 2 3
      ^


  Stack = [2, 3]
  Result= [0, 1, ]

 */

import { PrintArray } from "../utils/Utilities";


const subarrayMinsRef = (A:number[]): number => {
  const getMaxRange = (nums:number[]):number => {
    PrintArray(nums);
    const stack = [-1];
    nums.push(Infinity);
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
      let val = nums[i];
      console.log(`-----------------`)
      console.log(`val: ${val}`)

      while (nums[stack[stack.length - 1]] < val) {
        const MOST_MAX = stack.pop();
        const LEFT_BOUNDARY = stack[stack.length - 1];
        const LEFT_RANGE = MOST_MAX - LEFT_BOUNDARY;//
        const RIGHT_RANGE = i - MOST_MAX;
        PrintArray(nums);
        console.log(`MOST_MAX: ${MOST_MAX} | LEFT_BOUNDARY: ${LEFT_BOUNDARY} | LEFT_RANGE: ${LEFT_RANGE} | RIGHT_RANGE: ${RIGHT_RANGE}`)
        console.log(`nums[MOST_MAX](${nums[MOST_MAX]}) * LEFT_RANGE(${LEFT_RANGE}) * RIGHT_RANGE(${RIGHT_RANGE}): ${nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE}`)

        res += nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE;
      }
      stack.push(i);
      PrintArray(stack);
      console.log(`res: ${res}`)
    }
    return res;
  }
  
  const N = A.map(n => -n);
  return getMaxRange(A) + getMaxRange(N);
}

const subarrayMins = (nums:number[]): number => {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let smallest = nums[i];
    let biggest = nums[i];

    for (let j = i; j < nums.length; j++) {
      smallest = Math.min(smallest, nums[j]);
      biggest = Math.max(biggest, nums[j]);
      res += biggest - smallest;
    }
  }

  return res;
}

export default () => {
  console.log(subarrayMins([1,2,3,4]));
  // console.log(subarrayMins([1,3,3]));
};
