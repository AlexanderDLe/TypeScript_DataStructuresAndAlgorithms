/**
 *  33. Search In Rotated Sorted Array
 */
const search = (nums: number[], target: number): number => {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        let M = Math.floor((L + R) / 2);
        let mid = nums[M];
        if (target === mid) return M;

        if (target < mid) {
            if (mid >= nums[L]) {
                if (target >= nums[L]) R = M - 1;
                else L = M + 1;
            } else if (mid < nums[L]) {
                if (target <= nums[L]) R = M - 1;
                else L = M + 1;
            }
        }
        if (target > mid) {
            if (mid >= nums[R]) {
                if (target >= nums[R]) L = M + 1;
                else R = M - 1;
            } else if (mid < nums[R]) {
                if (target <= nums[R]) L = M + 1;
                else R = M - 1;
            }
        }
    }

    return -1;
};

const searchB = (nums: number[], target: number): number => {
    let L = 0;
    let R = nums.length - 1;

    while (L < R) {
        let M = Math.floor((L + R) / 2);
        if (nums[M] === target) return M;

        if (nums[L] <= nums[M]) {
            if (target >= nums[L] && target < nums[M]) R = M - 1;
            else L = M + 1;
        } else {
            if (target > nums[M] && target <= nums[R]) L = M + 1;
            else R = M - 1;
        }
    }

    return nums[L] === target ? L : -1;
};

export default () => {
    const nums = [4, 5, 6, 7, 8, 1, 2, 3];
    const target = 1;
    console.log(searchB(nums, target));
};
