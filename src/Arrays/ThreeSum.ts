/**
 *  15. 3Sum
 */
const threeSum = (nums: number[]): number[][] => {
    let result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let T = 0; T < nums.length - 2; T++) {
        if (nums[T] > 0) break;
        let L = T + 1;
        let R = nums.length - 1;
        while (L < R) {
            let sum = nums[L] + nums[R] + nums[T];
            if (sum === 0) {
                result.push([nums[T], nums[L], nums[R]]);
                while (nums[L] === nums[L + 1]) L++;
                while (nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) L++;
            else R--;
        }
        while (nums[T] === nums[T + 1]) T++;
    }

    return result;
};

export default () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    console.log(threeSum(nums));
};
