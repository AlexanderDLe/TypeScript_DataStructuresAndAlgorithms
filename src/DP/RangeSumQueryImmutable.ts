/**
 * 303. Range Sum Query - Immutable
 */

import ThreeSum from "../Arrays/ThreeSum";
import { PrintArray } from "../utils/Utilities";

class NumArray {
  totalSum: number;
  sumsLeft: number[];
  sumsRight: number[];

  constructor(nums: number[]) {
    this.sumsLeft = new Array(nums.length);
    this.sumsRight = new Array(nums.length);
    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
      currSum += nums[i];
      this.sumsLeft[i] = currSum;
    }

    currSum = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
      currSum += nums[i];
      this.sumsRight[i] = currSum;
    }
    this.totalSum = currSum;
  }

  sumRange(left:number, right:number): number {
    let removeLefts = this.sumsLeft[left - 1] || 0;
    let removeRights = this.sumsRight[right + 1] || 0;
    return this.totalSum - removeLefts - removeRights;
  }
}

export default () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    /*                          L [-2,-2, 1, -4,-2, -3]
                                R [-3,-1,-1, -4, 1, -1]
                                T = -3
    */
    console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
    console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
    console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
};
