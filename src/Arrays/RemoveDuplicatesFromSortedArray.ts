/**
 * 26. Remve Duplicates From Sorted Array
 */

const removeDuplicates = (nums: number[]): number => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

export default () => {
    const nums = [0,0,1,1,1,2,2,3,3,4];
    console.log(removeDuplicates(nums));
};
