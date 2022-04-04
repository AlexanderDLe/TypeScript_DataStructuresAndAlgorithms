/**
 * 370. Range Addition
 */

import { PrintArray } from "../utils/Utilities";

const getArraySlower = (length:number, nums: number[][]): number[] => {
  const result:number[] = new Array(length).fill(0);

  for (let [start, end, value] of nums) {
    for (let i = start; i <= end; i++) {
      result[i] += value;
    }
  }

  return result;
};

const getArray = (length:number, nums: number[][]): number[] => {
  let result:number[] = new Array(length).fill(0);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let [start, end, value] = nums[i];
    
    result[start] += value;
    if (end + 1 <= length - 1) result[end + 1] -= value;
  }
  PrintArray(result);
  for (let i = 0; i < length; i++) {
    sum += result[i];
    result[i] = sum;
  }
  
  return result;
}
export default () => {
  PrintArray(getArray(5, [[1,3,2],[2,4,3],[0,2,-2]]));
  PrintArray(getArray(10, [[2,4,6],[5,6,8],[1,9,-4]]));
};
