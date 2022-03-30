/**
 * 41. First Missing Positive
 * 
 * [3, 4, -1, 1]
 * 
 * [-1, -I,  0, 2]
 * 
 */

const firstMissingPositiveRef = (nums: number[]): number => {
  if (!nums.length) return 1;

  // Set all negatives to zero
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) nums[i] = 0;
  }

  // Use flip method.
  // 1. All numbers > length can be ignored.
  // 2. All numbers < length should have their indexes be negative
  //  to indicate their existence in sorted order.
  // 3. All zeroes should be set to -Infinity to indicate existence despite being 0
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let target = nums[num - 1];
    
    if (num > nums.length) continue;
    if (target < 0) continue;
    if (target === 0) nums[num - 1] = -Infinity;
    else nums[num - 1] *= -1;
  }
  
  // The first index + 1 that is not negative is the first missing positive
  // If loop exits, then array doesn't have any gaps and the first missing is
  // number immediately after largest num.
  for (let i = 1; i <= nums.length; i++) {
    let target = nums[i - 1];
    if (target < 0) continue;
    else return i;
  }
  
  return nums.length + 1;
};

const firstMissingPositive = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) nums[i] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]);
    let target = nums[val - 1];
    console.log(val);
    console.log(target);

    // Mistake: Used >= nums.length --- but, the value can definitely be
    // equal to length: [1] with val 1
    if (val > nums.length) continue;
    if (target === 0) nums[val -1] = -Infinity
    if (target > 0) nums[val - 1] *= -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) return i + 1;
  }

  return nums.length + 1;
}

export default (): void => {
  // console.log(firstMissingPositive([1,2,0]));
  // console.log(firstMissingPositive([3,4,-1,1]));
  // console.log(firstMissingPositive([7,8,9,11,12]));
  // console.log(firstMissingPositive([0,1,2]));
  // console.log(firstMissingPositive([1,2,3]));
  console.log(firstMissingPositive([1]));
};
