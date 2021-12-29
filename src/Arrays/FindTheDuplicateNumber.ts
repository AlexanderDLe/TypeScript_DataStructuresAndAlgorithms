/**
 * 287. Find the Duplicate Number
 */

/*  Set Method Analysis.

    Runtime: O(n) - iterate through array of nums
    
    Space: O(n) - add each element to set 
    
    Strategy: Use set to store previusly added elements.
    If elements already exist in the set, then it is a duplicate.
*/
const findDuplicateSetMethod = (nums: number[]): number => {
    const set = new Set([]);

    for (let num of nums) {
        if (set.has(num)) return num;
        else set.add(num);
    }

    return 0;
}

/*  Flip Method Analysis.

    Runtime: O(n) - Iterate through array of nums
    
    Space: O(1) - Using constant space.
    
    Strategy: Iterate through array. Take the current absolute value
    of the array and flip (make negative/positive) the corresponding
    element of the array.

    This strategy modifies the array by flipping elements negative.
*/
const findDuplicateFlipMethod = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        let currAbsValue = Math.abs(nums[i]);

        if (nums[currAbsValue - 1] < 0) return currAbsValue;
        nums[currAbsValue - 1] *= -1;
    }

    return 0;
}

const findDuplicateB = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[Math.abs(nums[i]) - 1];

        if (num < 0) return Math.abs(nums[i]);
        else nums[Math.abs(nums[i]) - 1] *= -1;
    }
    return 0;
};

const findDuplicate = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]);

        let val = nums[index - 1];
        if (val < 0) return index;

        nums[index - 1] = -nums[index - 1];
    }
    return 0;
}

export default () => {
    const nums = [2,3,4,1,3];
    console.log(findDuplicate(nums));
};
