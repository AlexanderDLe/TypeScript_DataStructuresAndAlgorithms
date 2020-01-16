/**
 * 287. Find the Duplicate Number
 */

const findDuplicate = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[Math.abs(nums[i]) - 1];

        if (num < 0) return Math.abs(nums[i]);
        else nums[Math.abs(nums[i]) - 1] *= -1;
    }
    return 0;
};

export default () => {
    const nums = [2, 1, 1];
    console.log(findDuplicate(nums));
};
